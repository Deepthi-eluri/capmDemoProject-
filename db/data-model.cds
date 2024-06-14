namespace practiceCapm;

entity students{
    key student_id: String(6);
        student_name: String(20);
        student_grade: Integer;
} 

entity Parents{
    key parent_id: String(10);
    key kid_id: String(10);
        parent_name: String(25)
}

entity StudentsMarks{
    key student_id: String(6);
    key subject: String(10);
        marks: String(30)
}

entity Rank{
    key student_id: String(6);
    rank: Integer
}

type StudentMarksCopy{
    student_id: String(6);
    subject: String(10);
    marks: Integer
}

entity CompleteStudentInformation{
    key student_id: String(6);
        parent_id: String(10);
        students_marks: Array of StudentMarksCopy;
        rank: Integer
}

entity studentsFee{
    key student_id: String(6);
        fee_paid: Boolean;
}    

entity employees{
    key emp_id: String(5);
}

entity employeeAccess{
    key emp_id: String(5);
    access_present: Boolean;
}

entity employeeAttendance{
    key emp_id: String(5);
    key date: Date;
}

entity everydayLunch{
    key emp_id: String(5);
    key today_date: Date;
}

entity previousEmployee{
    key emp_id: String(5)
}

entity bookingSiteDatabase{
    key mobile_no: String(10);
        name: String(20);
}

entity bookingSiteLogin{
    key mobile_no: String(10);
        password: String(8);
}

entity busBooking{
    key mobile_no: String(10);
    key passenger_name: String(20);
}
 
entity busDetails{
    key bus_name: String(25);
        seats_available: Integer;
}

entity busSelected{
    key bus_name: String(25);
        seats_needed: Integer
}

entity Owners{
    key owner_id : String(5);
        owner_name : String(15);
        toCars: Association to many Cars on toCars.owner_id= $self.owner_id
}

entity Cars{
    key owner_id : String(5);
    key car_no : String(10);
        car_name: String(10)
}

entity BikeOwners{
    key owner_id : String(5);
        owner_name: String(30);
}
entity Teachers{
    key teacher_id: String(5);
        teacher_name: String(15);
}