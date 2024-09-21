import React from 'react'

const JioCinema = () => {
    const Record =[
        {id:1,
         views:1000,
         prog_name:"Tarak Mehta ka Ollatah Chasma",
         date_telecast:"2002-1-1",
         income_from_ad:100000,
         expenses:500000
        },
        {id:2,
        views:1500,
        prog_name:"Anupama",
        date_telecast:"2003-1-1",
        income_from_ad:150000,
        expenses:300000
        },
        {id:3,
        views:2000,
        prog_name:"Khatron Ke Khiladi",
        date_telecast:"2004-1-1",
        income_from_ad:200000,
        expenses:100000
        },
        {id:4,
        views:2500,
        prog_name:"Big Boss",
        date_telecast:"2005-1-1",
        income_from_ad:250000,
        expenses:125000
        },
        {id:5,
        views:3000,
        prog_name:"IPL",
        date_telecast:"2006-1-1",
        income_from_ad:300000,
        expenses:150000
        },
    ]

    // Task = 2
    // const iplrecord=(Record.filter((data)=>(
    //     data.id === 5
    // )))
    // console.log(iplrecord)

    // Task = 3
    // const maxView=Math.max(...Record.map((data)=>(
    //     data.views
    // )
    // ))
    // // console.log(maxView)
    // const max=(Record.filter((data)=>(
    //    data.views === maxView
    // )))
    // console.log(max)

    // Task = 4

       const loss= Record.map((data)=>{
        if(data.expenses>data.income_from_ad){
            return(
                <ol key={data.id}>
                <li>Id: {data.id}</li>
                <li>Program Name: {data.program_name}</li>
                <li>Views: {data.views}</li>
                <li>Date Telecast: {data.date_telecast}</li>
                <li>Income of Ad: {data.income_of_ad}</li>
                <li>Expenses: {data.expenses}</li>
                <li>loss{data.expenses - data.income_from_ad}</li>
                </ol>
            )
        }
        else{
          return  null
        }
       })

       //Task 5
       const newProgram ={
        id:6,
        views:4000,
        prog_name:"Sony LIV",
        date_telecast:"2007-1-1",
        income_from_ad:400000,
        expenses:100000
       }

       const addRecord=[...Record,newProgram]

    //    Task 6
    //  const Delete = delete Record[2]

    //Task 7

    const Update= Record.map((data=>(data.expenses + (data.expenses * 0.10))))
    console.log(Update)

    
  return (
    <>
    <div className='table'>
        {/* Task = 1 */}
    <h2>All Records</h2>
    <table border={2}>
    <thead>
        <tr>
            <td>S.No</td>
            <td>Total Views</td>
            <td>Programme Views</td>
            <td>Date of Telecast</td>
            <td>Income from Ads</td>
            <td>Expenses Made</td>
        </tr>
    </thead>
    <tbody>
        {Record.map((data)=>(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.views}</td>
                <td>{data.prog_name}</td>
                <td>{data.date_telecast}</td>
                <td>{data.income_from_ad}</td>
                <td>{data.expenses}</td>
            </tr>
        ))}
    </tbody>
    </table>
    <h3>Loss Records : </h3>
    <p>{loss}</p>
    <table border={2}>
    <thead>
        <tr>
            <td>S.No</td>
            <td>Total Views</td>
            <td>Programme Views</td>
            <td>Date of Telecast</td>
            <td>Income from Ads</td>
            <td>Expenses Made</td>
        </tr>
    </thead>
    <tbody>
        {addRecord.map((item)=>(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.views}</td>
                <td>{item.prog_name}</td>
                <td>{item.date_telecast}</td>
                <td>{item.income_from_ad}</td>
                <td>{item.expenses}</td>
            </tr>
        ))}
    </tbody>
    </table>
    
    </div>
    </>
  )
}

export default JioCinema