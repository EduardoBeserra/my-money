import React from 'react'

/*
export default props => (
    <li className='treeview'>
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
            <li>
                <a href='#billingCycles'>
                    <i className={'fa fa-usd'}></i> Ciclos de Pagamentos
                </a>
            </li>
        </ul>

    </li>

)
*/

export default props => (
    <div>
        <li className='collapsed active' data-target="#itens" data-toggle='collapse'>
            <a href="#">
                <i className={`fa fa-${props.icon}`}></i> {props.label}
                
            </a>
        </li>
        <ul className='sub-menu collapse' id="itens">
            {props.children}
        </ul>

    </div>
)
//<i className='fa fa-angle-left pull-right'></i>