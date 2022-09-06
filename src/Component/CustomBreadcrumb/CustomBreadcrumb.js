import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './CustomBreadcrumb.css'

const CustomBreadcrumb = ({tags,tagslength}) => {
 

    return (
        <Breadcrumb  tag="nav" listTag="div">
            {

                tags.map((item,key)=>{
                    console.log(item)
                    return(
                        <>
                            {key+1==tagslength?<BreadcrumbItem active className="my-breadcrumb" tag="a" href={item.href}>{item.page}</BreadcrumbItem>:
                            <BreadcrumbItem className="my-breadcrumb" tag="a" href={item.href}>{item.page}</BreadcrumbItem>}
                        
                        </>
                    )

                    
                })
            }
        
      </Breadcrumb>
    )
}

export default CustomBreadcrumb
