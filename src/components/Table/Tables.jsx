import './../Table/table.css'

function Button({variant}){
    return(
        <button className='button'>{variant}</button>
    )
}

const Tables = ({type}) => {
    let data;
    switch (type) {
        case "buckets":
            data = [
                {
                    name: 'ACME Corp',
                    budget:'$ 200,000',
                    spend: '$ 173,762',
                    forecast:'$ 205,049',
                    button:''
                },
                {
                    name: 'Raman Inc',
                    budget:'$ 200,000',
                    spend: '$ 124,762',
                    forecast:'$ 292,629',
                    button:''
                }
            ]
            break;
        case "approval":
            data = [
                {
                    name: 'ACME Corp',
                    budget:'$ 200,000',
                    spend: '$ 250,000',
                    forecast:'Joe Hilfinger',
                    button1:<Button variant="Approve"/>,
                    button2:<Button variant="Reject"/>
                },
            ]
            break;
        case "member":
            data = [
                {
                    name: 'Longate',
                    budget:'$ 200,000',
                    spend: '$ 173,762',
                    forecast:'$ 205,049',
                    button:'',
                },
            ]
            break;
    
        default:
            break;
    }

    let heading;
    switch (type) {
        case "buckets":
            heading ={
                header:'Buckets you own',
                tableHeading:['Name', 'Budget', 'Spend', 'Forecast', '',],
                
            }
            break;
        case "approval":
            heading ={
                header:'Approval assigned to you',
                tableHeading:['Bucket Name', 'Current Budget', 'Requested Budget', 'Requested By', ''],
            }
            break;
        case "member":
            heading ={
                header:'Buckets you are member',
                tableHeading:['Name', 'Budget', 'Spend', 'Forecast', '',],
            }
            break;
    
        default:
            break;
    }

  return (
    <div className='table-container'>
        <h4>{heading.header}</h4>
        <table className='table'>
            <thead>
                <tr>
                    {heading.tableHeading.map((item, i) => (
                        <th key={i}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) => (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.budget}</td>
                        <td>{data.spend}</td>
                        <td>{data.forecast}</td>
                        <td>
                            <table className='nested-table'>
                                <thead>
                                    <tr>
                                        <td>{data.button1}</td>
                                        <td>{data.button2}</td>
                                    </tr>
                                </thead>
                            </table>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Tables;