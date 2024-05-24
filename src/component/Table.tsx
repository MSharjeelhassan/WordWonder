

export default function Table(props:{
    count :string;
    capital:string;
    small:string;
    up:string,
    details:any,
    class1 :any

})
{
    const {count,small,capital,up,details,class1}=props;
    return (
    <>
      <table className= {`table table-primary table-hover ${class1}`}>
  <thead className="text-center">
    <tr>
      <th scope="col">{count}</th>
      <th scope="col">{capital}</th>
      <th scope="col">{small}</th>
      <th scope="col">{up}</th>
    </tr>
  </thead>
  
    

    {details.map((e:any)=>(
        <>
        
        <tbody className="text-center my-5">
        <td className="" scope="col" >{e.count}</td>
        <td className="">{e.capital}</td>
        <td className="">{e.small}</td>
        <td className="">{e.up}</td>
        </tbody>
        </>
    ),
    console.log(details))}
  
</table>
    </>
  )
}
