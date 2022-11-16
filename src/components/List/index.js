

import React from 'react'

const List = ({data, ordered}) => {
   return (
{ordered }
    
      // {ordered ? (<ol>
      //   {data.map((item) => {
      //     return (
      //       <li>{item}</li>
      //     )
      //   })}
      //   </ol>) : (<ul>
      //           {data.map((item) => {
      //             return <li>{item}</li>;
      //           })}
      //         </ul>)}
      
    
   )
}


export default List

// export const List = ({ data, ordered }) => {
//   if (ordered) {
//     return (
//       <ol>
//         {data.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ol>
//     );
//   }
//   return (
//     <ul>
//       {data.map((item) => {
//         return <li>{item}</li>;
//       })}
//     </ul>
//   );
// };


