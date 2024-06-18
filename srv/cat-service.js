const cds = require('@sap/cds');

module.exports = cds.service.impl(
    async function(srv){
        // this.before('CREATE','StudentServiceTable',async req=>{

        //     let Fees_Paid = await SELECT.from('practiceCapm_studentsFee').where({student_id:req.data.student_id});
        //     if(Fees_Paid.length==0){
        //         req.reject({
        //             code:"500",
        //             message:"Please Pay the fee"
        //         })
        //     }
        //     else if(Fees_Paid.length>0 && Fees_Paid[0].fee_paid==0){
        //         req.reject({
        //             code:"500",
        //             message:"Student entry is done but fee is not paid"
        //         })
        //     }
        // });
        // Employee Attendance Scenario
        // this.before('CREATE','employeeAttendance', async req=>{
        //     let attendance = await SELECT.from ('practiceCapm_employeeAccess'). where({emp_id: req.data.emp_id});
        //     if(attendance.length==0){
        //         req.reject({
        //             code:"500",
        //             message:"Access Denied. Please contact Admin"
        //         })
                
        //     }
        //     else if(attendance.length>0 && attendance[0].access_present==0){
        //         req.reject({
        //             code:"500",
        //             message: "Access Denied. Please Contact Admin"
        //         })
        //     }
        // });
        
        // this.after('CREATE','employeeAttendance', async req=>{
        //     let result= await INSERT.into('practiceCapm_everydayLunch').entries({emp_id:req.emp_id,today_date:req.date})
        //     console.log("Lunch Provided Successfully")
        // });

        // this.before('CREATE','previousEmployee', async req=>{
        //     let currentEmp_id= req.data.emp_id;
        //     let delete_record= await DELETE.from('practiceCapm_employees').where({emp_id:currentEmp_id})
        // })
        // Bus Booking Scenario
        // this.before('CREATE','bookingSiteLogin', async req=>{
        //     let registeredNumber= await SELECT.from('practiceCapm_bookingSiteDatabase').where({mobile_no:req.data.mobile_no});
        //     if(registeredNumber.length==0){
        //         req.reject({
        //             code:"500",
        //             message: "Mobile number not registered"
        //         })
        //     }
        // })

        // this.before('CREATE','busSelected', async req=>{
        //     let seatsSelected=req.data.seats_needed;
        //     let selected= await SELECT.from('practiceCapm_busDetails'). where({seats_available:seatsSelected})
        //     if(selected[0].seats_available==seatsSelected){
        //         req.reject({
        //             code:"400",
        //             message:"Seats not available"
        //         })
        //     }
        // })
        // this.on('GET','CompleteStudentInformation', async req=>{
        //     let student_id_fromuser= req.params[0].student_id;
        //     let student_value= await SELECT.from('practiceCapm_students').where({student_id:student_id_fromuser});
        //     let parent_value= await SELECT.from('practiceCapm_Parents').where({kid_id:student_id_fromuser});
        //     let student_marks_value= await SELECT.from('practiceCapm_StudentsMarks').where({student_id:student_id_fromuser});
        //     let student_rank= await SELECT.from('practiceCapm_Rank').where({student_id:student_id_fromuser});
        //     let final_response={
        //         student_id: student_value[0].student_id,
        //         parent_id:parent_value[0].parent_id,
        //         students_marks:student_marks_value,    
        //         rank: student_rank[0].rank
        //     }

        //     req.reply(final_response);
        // })

        // Function
        this.on('getStudentDetails', async(req,res)=>{
            console.log("Function Called")
            let teacher_id= req.data.teacher_id
            let student_id= req.data.student_id
            let student_info= await SELECT.from('practiceCapm_students').where({student_id:student_id});
            let teacher_info= await SELECT.from('practiceCapm_Teachers').where({teacher_id:teacher_id});
            let result={
                "student_id" : student_info[0].STUDENT_ID,
                "student_name" : student_info[0].STUDENT_NAME,
                "teacher_id" : teacher_info[0].TEACHER_ID,
                "teacher_name":teacher_info[0].TEACHER_NAME
            }
            req.reply(result);
        });
        // action
        this.on('fetchStudentDetails', async(req,res)=>{
            console.log("Function Called")
            let teacher_id= req.data.teacher_id
            let student_id= req.data.student_id
            let student_info= await SELECT.from('practiceCapm_students').where({student_id:student_id});
            let teacher_info= await SELECT.from('practiceCapm_Teachers').where({teacher_id:teacher_id});
            let result={
                "student_id" : student_info[0].STUDENT_ID,
                "student_name" : student_info[0].STUDENT_NAME,
                "teacher_id" : teacher_info[0].TEACHER_ID,
                "teacher_name":teacher_info[0].TEACHER_NAME
            }
            req.reply(result);
        });
    }
)
