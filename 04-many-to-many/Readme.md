## SWABATs
- [ ] implement a many to many relationship
- [ ] Demonstrate Single source of Truth by not storing collections of objects on other objects
- [ ] Demonstrate Single source of truth by not storing one object in multiple collections


## Build infirmary app
- [x] The Doctor class should have a way to store all instances created of that class
- [x] Doctor has a name, one nurses, many patients through Appointments 
- [x] The Patient class should have a way to store all instances created of that class
- [x] Patient, name, many doctors through Appointments
- [x] Appointment (join) has a date, issue, one Patient and one Doctor
- [x] The Appointment class should have a way to store all instances created of that class
- [x] Nurse, name, many Doctors

- [x] Doctor should be able to look up all of their appointments 
- [x] Doctor should be able to look up all of their patients 
	- Find all of the appointments 
	- Return only the Patients from those appointments 
- [x]  Doctor should be able to look up their nurse 

- [x] Patient should be able to look up all of their appointments 
- [x] Patient should be able to look up all of their Doctors 
	-Find the appointments 
	-Return only the Doctors from those appointments 
- [x] Patients should be able to make appointments 
- [x] Patients should be able to change appointments date or issue

- [x] Nurse should be able to look up all of their doctors 


```
Dr. Leonard McCoy
	Hikaru Sulu
	Pavel Chekov

Dr Beverly Crusher
	Geordi La Forge
	Deanna Troi

Dr Emergency Medical Hologram Mark I (EMH)
	B'Elanna Torres
	Harry Kim

Nurse 
Christine Chapel

Issues
phaser bruns
Gorch
Klingon Augment Virus

Life Prolongation Complex
Transporter Psychosis
```