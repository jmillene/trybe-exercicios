export default interface IEmployee{
 registration: number | string;
  salary: number | string;
  admissionDate: Date;

  generateRegistration(): string;
}