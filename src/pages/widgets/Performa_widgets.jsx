import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PostAddIcon from '@mui/icons-material/PostAdd';
import "../../style/widgets/widgets.scss"
function Performa_widgets({type}){
    let data;

    switch (type) {
        case 'Total_sale':
            data = {
                title: 'Total Sales',
                icon: <AttachMoneyIcon className='icon' />
            }

            break;
        case 'Toal_receipt':
            data = {
                title: 'Total Receipts',
                icon: <PostAddIcon className='icon' />
            }

            break;
        case 'Total_Due':
            data = {
                title: 'Total Due',
                icon: <PostAddIcon className='icon' />
            }

            break;
        case 'Total_Expenses':
            data = {
                title: 'Total Expenses',
                icon: <PostAddIcon className='icon' />
            }

            break;

        default:
            break;
    }
    return (
        <div className="widgets">
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='Counter'>1</span>

            </div>
            <div className="right">
                <span className='icon'>{data.icon}</span>
            </div>

        </div>
    )
}
export default Performa_widgets