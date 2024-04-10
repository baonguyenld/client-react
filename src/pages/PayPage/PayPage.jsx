import React from 'react';
import { Link } from 'react-router-dom';
import "./PayPage.css";
const PayPage = ({list,log}) => {
    log=true
    list=[{}];
  return (
    <div className="container pay-body">
        <div className='pay-title'>Thanh toán</div>
        {renderPay(list,log)}
    </div>
  )
}
function renderPay(list,log) {
    if (list.length==0) {
        return(
            <div className='pay-content'>
                Hiện không có sản phẩm nào trong giỏ hàng của bạn.<br/>
                Bạn vui lòng <Link className='pay-link'>chọn sản phẩm</Link>
            </div>
        )
    }else{
        return(
        <div className='pay-content d-flex'>
        {renderMethod(log)}
        <div className="method-info col-5 d-flex flex-wrap">
            {renderAddress()}
            {renderOrder(list)}
        </div>
        </div>
        )
    }
}
function renderMethod(log) {
    if(log==true)
    {
        return(
            <div className="method-pay col-7">
                <div className='method-title d-flex justify-content-center align-items-center '>Phương thức thanh toán</div>
                <table className='method-table'>
                    <tr className='method-row'>
                        <td className='table-title'>Cách Thanh Toán</td>
                        <td className='table-input'>
                            <select name="method-choice" className='method-choice form-select'>
                                <option disabled selected value="">Chọn phương thức thanh toán</option>
                                <option value="0">Thanh toán qua VNPAY</option>
                                <option value="1">Thanh toán khi nhận hàng</option>
                            </select>
                        </td>
                    </tr>                 
                     <tr className='method-row'>
                        <td className='table-title'>Mã Captcha</td>
                        <td className='table-input'><input type="text" name='captcha-text'  className='method-captcha-text form-control w-25' disabled value={5}/></td>
                    </tr>                    
                    <tr className='method-row'>
                        <td className='table-title'>Nhập Mã Captcha</td>
                        <td className='table-input'><input type="text"name='input-captcha' className='input-captcha form-control w-25' placeholder='Mã Captcha...'/></td>
                    </tr>                   
                     <tr className='method-row'>
                        <td className='table-title'>Thông Tin Thêm</td>
                        <td className='table-input'>
                            <textarea name="input-note"  className='input-note form-control' id="" cols="20" rows="5" ></textarea>
                        </td>
                    </tr >
                </table>
                {renderbutton(log)}
            </div>
        )
    }
    else{
        return(
            <div className="method-pay col-7 ">
                <div className='method-title d-flex justify-content-center align-items-center '>Đăng nhập</div>
                <div className='method-login d-flex flex-column justify-content-center align-items-center '>
                <div class="input-group flex-nowrap email ">
                <span class="input-group-text" id="addon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                </span>
                <input type="text" class="form-control" placeholder="Nhập Email...." aria-label="mail" aria-describedby="addon-wrapping"/>
            </div>
            <div class="input-group flex-nowrap pass">
                <span class="input-group-text" id="addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </span>
                <input type="password" class="form-control" placeholder="Nhập Mật khẩu...." aria-label="pass" aria-describedby="addon-wrapping"/>
             </div>
             <div className='account-button d-flex flex-column justify-content-center align-items-center '>
                <button className='account-btn-log'>Đăng nhập</button>
            </div>

                </div>
            </div>
        )
    }
}
function renderbutton(log) {
    if (log==true) {
        return(
        <div className='method-button d-flex justify-content-center align-items-center '>
            <button className='method-btn-pay'>Thanh toán</button>
        </div>
       )
    } 
}
function renderAddress() {
        return(
        <div className='info-delivery '>
            <div className='address-title '>Thông tin giao hàng</div>
            <div class="input-group mb-2 info-name">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </span>
                </div>
                <input type="text" class="form-control input-info-name" placeholder="Tên người nhận"/>
            </div>
            <div class="input-group mb-2 info-phone">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    </span>
                </div>
                <input type="text" class="form-control input-info-phone" placeholder="Số điện thoại"/>
            </div>
            <div class="input-group mb-2 info-address">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                        </svg>
                    </span>
                </div>
                <input type="text" class="form-control input-info-address" placeholder="Địa chỉ nhận hàng"/>
            </div>
        </div>
       )

}
function renderOrder(list) {
    return(
        <div className='info-order '>
            <div className='order-title '>Thông tin đơn hàng</div>
            <div className='order-list'>
            <table class="table">
                    <thead className='table-header'>
                        <tr >
                        <th className='order-text text-center'>STT</th>
                        <th className='order-text text-center order-name'>Tên sản phẩm</th>
                        <th className='order-text text-center'>Đơn giá</th>
                        <th className='order-text text-center'>Số lượng</th>
                        <th className='order-text text-center'>Thành tiền</th>
                        </tr>
                    </thead>
                    {list.map((item,index) =>(
                        <tr className='order-table-row'>
                        <td className='order-text text-center'>{index+1}</td>
                        <td className='order-text text-start'>a</td>
                        <td className='order-text text-center'>1</td>
                        <td className='order-text text-center'>5</td>
                        <td className='order-text text-center'>{formatPrice(240)}</td>
                        </tr>
                    ))}
                </table>
            {renderTotal(list)}
            </div>
        </div>
       )
}
function formatPrice(price) {
    let strNum ="Đ";
    let phandu;
    let phannguyen=parseInt(price)
    while (phannguyen/1000>=1) {
        phandu = phannguyen%1000;
        phannguyen = (phannguyen-phandu)/1000;
        if (phandu===0) {
          strNum= ",000"+strNum;
        }
        else
        { 
            if(phandu.toString().length===3)
              strNum= ","+phandu.toString()+strNum;
            else if(phandu.toString().length===2)
              strNum= ",0"+phandu.toString()+strNum;
            else strNum= ",00"+phandu.toString()+strNum;
        }

    }
    strNum= phannguyen.toString()+strNum;
    return strNum;
}
function renderTotal(list) {

        return(
        <div className='order-total d-flex justify-content-between'>
            <div className='order-price-text'>Thành tiền</div>
            <div className='order-price-number'>{formatPrice(270000000)}</div>
        </div>
       )
}
export default PayPage