import React from 'react'

const ProductRow = ({name, price, stocked, category}) =>{

return(
<tr>
  <td style={stocked ? {color:'black'} : {color:'red'}}>{name}</td>
  <td>{price}</td>
</tr>
    ) 
}

export default ProductRow