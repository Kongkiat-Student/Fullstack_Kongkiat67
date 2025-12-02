const registrationDate = new Date('2023-01-15T10:30:00Z');

const options = { year: 'numeric', month: 'long', day: 'numeric' , timeZone: 'Asia/bangkok' };

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`วันที่สมัคร: ${formattedDate}`);