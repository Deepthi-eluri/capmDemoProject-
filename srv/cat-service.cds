using {practiceCapm} from '../db/data-model';

service EmployeeService {
    entity employees as projection on practiceCapm.employees;
    entity StudentServiceTable as projection on practiceCapm.students;
    entity StudentFeesTable as projection on practiceCapm.studentsFee;
    entity employeeAccess as projection on practiceCapm.employeeAccess;
    entity employeeAttendance as projection on practiceCapm.employeeAttendance;
    entity everydayLunch as projection on practiceCapm.everydayLunch;
    entity bookingSite as projection on practiceCapm.bookingSiteDatabase;
    entity bookingSiteLogin as projection on practiceCapm.bookingSiteLogin;
    entity busBooking as projection on practiceCapm.busBooking;
    entity previousEmployee as projection on practiceCapm.previousEmployee;
    entity busDetails as projection on practiceCapm.busDetails;
    entity busSelected as projection on practiceCapm.busSelected;
    entity Parents as projection on practiceCapm.Parents;
    entity StudentsMarks as projection on practiceCapm.StudentsMarks;
    entity Rank as projection on practiceCapm.Rank;
    entity CompleteStudentInformation as projection on practiceCapm.CompleteStudentInformation;
    entity Owners as projection on practiceCapm.Owners;
    entity Cars as projection on practiceCapm.Cars;
    entity BikeOwners as projection on practiceCapm.BikeOwners;
    entity Teachers as projection on practiceCapm.Teachers;

    type StudentDetails{
        student_id: String;
        student_name: String;
        teacher_id: String;
        teacher_name: String;
    };
    function getStudentDetails(student_id: String,teacher_id: String) returns StudentDetails;
    action fetchStudentDetails(student_id: String,teacher_id: String) returns StudentDetails;

    entity viewforStudentandParents as select
    key S.student_id,
        S.student_name,
    key P.parent_id,
        P.parent_name
    from StudentServiceTable as S
    inner join Parents as P
    on S.student_id = P.student_id;

    entity StudentandParents as select
    key S.student_id,
        S.student_name,
    key P.parent_id,
        P.parent_name
    from StudentServiceTable as S
    left outer join Parents as P
    on S.student_id = P.student_id
    }