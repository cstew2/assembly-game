                area 	code, readonly
                entry
start
		adr 	r13,stack			
		mov 	r1,#x					
		mov 	r0,#n					
		str 	r1,[r13,#-4]!
		str 	r0,[r13,#-4]!
		sub 	r13,r13,#4 				
		
		bl 	power					
		
		ldr 	r0,[r13],#4				
		add 	r13,r13,#8					
		adr 	r11,result				
		str 	r0,[r11]				

loop		b 	loop							

;power function
power		stmfd 	r13!,{r0,r1,fp,lr}		
		mov 	fp,r13					
		ldr 	r1,[fp,#0x18]			
		ldr 	r0,[fp,#0x14]			
				
		cmp 	r0,#0						
		moveq 	r0,#1					
		streq 	r0,[fp,#0x10]			
		beq 	return 						
		
		and 	r0,#1					
		cmp 	r0,#1					
		ldr 	r0,[fp]
		bne 	else					
		sub 	r0,#1					
		str 	r0,[r13]				
		sub 	r13,r13,#4					
		bl 	power					
		ldr 	r0,[r13],#4					
		add 	r13,r13,#8					
		mul 	r0,r1,r0				
		str 	r0,[fp,#0x10]			
		b 	return
		
else		mov 	r0,r0,lsr #1				
		str 	r0,[r13]					
		sub 	r13,r13,#4					
		bl 	power					
		ldr 	r0,[r13],#4					
		add 	r13,r13,#8					
		mul 	r1,r0,r0					
		str 	r1,[fp,#0x10]				
		
return 		mov 	r13,fp						
		ldmfd 	r13!,{r0,r1,fp,pc}

		area 	xtothen, data, readwrite

n		equ 	4							
x		equ	3
result		dcd 	0							
		space 	200						
stack		dcd 	0							

		end
