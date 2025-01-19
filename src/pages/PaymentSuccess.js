import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Success from "../assets/success.png";
import { FaFileDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import Companylogo from "..//assets/ECS_logo.png"

const PaymentSuccess = () => {
  const [data] = useState({
    status: "success",
    message: "Transaction details retrieved successfully",
    transaction_data: {
      objectid: "transaction",
      transactionid: "U1238L900040GF",
      orderid: "ORD-20250117-073017-FCBCBB18",
      mercid: "BDUAT2K386",
      transaction_date: "2025-01-17T13:01:38+05:30",
      amount: "118000.00",
      surcharge: "0.00",
      discount: "0.00",
      gst: "18000.00",
      charge_amount: "118000.00",
      currency: "356",
      additional_info: {
        additional_info1: "UserName : Chandru",
        additional_info2: "UserEmail : chandru08112000@gmail.com",
        additional_info3: "UserPhoneNumber : 9941286931",
        additional_info4: "Course : Digital Marketing",
        additional_info5: "City : Chennai",
        additional_info6: "CourseFee : NA",
        additional_info7: "CourseGst : NA",
      },
      ru: "https://ecsaio.in/internship",
      txn_process_type: "nb",
      bankid: "123",
      itemcode: "DIRECT",
      bank_ref_no: "BILLDESK12",
      auth_status: "0300",
      transaction_error_code: "TRS0000",
      transaction_error_desc: "Transaction Successful",
      transaction_error_type: "success",
      payment_method_type: "netbanking",
      payment_category: "01",
      isNew: false,
    },
  });
  console.log("datas", data)
  const generatePDF = async () => {
    const mailContent = `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            margin: 1.5rem;
            padding: 5rem;
        }
    </style>
</head>

<body>
    <div
        style="max-height: auto; margin: auto;padding: 16px;font-size: 16px;line-height: 24px;font-family: 'Inter', sans-serif;color: #555;">
        <table style="font-size: 16px; line-height: 20px; margin-top: 3rem;">
            <thead>
                <tr>
                    <td style="padding: 0 16px 18px 16px;">
                        <img src=${Companylogo} alt="Company Logo"
                            style="width: 100px; height: auto; margin-bottom: 10px;">
                        <p>info@ecsaio.in</p>
                        <p>+91 9361365818</p>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <table
                            style=" padding: 20px 16px; width: 100%; border-radius: 12px;font-size: 16px;  table-layout: fixed;margin-top: 3rem;">
                            <tbody>
                                <tr>
                                    <td
                                        style="vertical-align: top; width: 30%; padding-right: 20px;padding-bottom: 35px;">
                                        <p style="font-weight: 700;">To</p>
                                        <p style="color: #5E6470;">Name: ${data?.transaction_data?.additional_info?.additional_info1?.split(":")[1].trim()}</p>
                                        <p style="color: #5E6470;">Mbile No: ${data?.transaction_data?.additional_info?.additional_info3?.split(":")[1].trim()}</p>
                                        <p style="color: #5E6470;">Email: ${data?.transaction_data?.additional_info?.additional_info2?.split(":")[1].trim()}</p>
                                        <p style="color: #5E6470;">City: ${data?.transaction_data?.additional_info?.additional_info5?.split(":")[1].trim()}</p>
                                    </td>
                                    <td
                                        style="vertical-align: top; width: 35%; padding-right: 20px;padding-bottom: 35px;">
                                        <p style="font-weight: 700; color: #1A1C21;"></p>
                                        <p style="color: #5E6470;"></p>

                                        <p style="font-weight: 700; color: #1A1C21;"></p>
                                        <p style="color: #5E6470;"></p>
                                    </td>
                                    <td style="vertical-align: top; width: 30%; padding-right: 20px;padding-bottom: 35px;">
                                    <p style="color: #5E6470; text-align: center">Date: ${new Date(data?.transaction_data?.transaction_date).toLocaleDateString()}</p>
                                        <p style="color: #5E6470;text-align: center">Time: ${new Date(data?.transaction_data?.transaction_date).toLocaleTimeString()}</p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div style="margin-top: 5rem;">
                                            <div style="display: flex; justify-content: space-between; color: #5E6470;">
                                                <div>Order ID : ${data?.transaction_data?.orderid}</div>
                                                <div>Transaction ID: ${data?.transaction_data?.transactionid}</div>
                                            </div>
                                        </div>
                                        <table style="width: 100%;border-spacing: 0;margin-top: 1rem;">
                                            <thead>
                                                <tr style="text-transform: uppercase;">
                                                    <td style="padding: 8px 0; border-block:1px solid #D7DAE0;">
                                                    Course Detail</td>
                                                    <td
                                                        style="padding: 8px 0; border-block:1px solid #D7DAE0; width: 40px;">

                                                    </td>
                                                    <td
                                                        style="padding: 8px 0; border-block:1px solid #D7DAE0; text-align: end; width: 100px;">
                                                        GST
                                                    </td>
                                                    <td
                                                        style="padding: 8px 0; border-block:1px solid #D7DAE0; text-align: end; width: 120px;">
                                                        Amount</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style="padding-block: 12px;">
                                                        <p style="color: #1A1C21;">${data?.transaction_data?.additional_info?.additional_info4?.split(":")[1].trim()}
                                                        </p>
                                                    </td>
                                                    <td style="padding-block: 12px;">
                                                        <p style="700; color: #1A1C21;"></p>
                                                    </td>
                                                    <td style="padding-block: 12px; text-align: end;">
                                                        <p style="700; color: #1A1C21;">${data?.transaction_data?.gst}</p>
                                                    </td>
                                                    <td style="padding-block: 12px; text-align: end;">
                                                        <p style="700; color: #1A1C21;">${data?.transaction_data?.charge_amount}</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td style="padding-block: 12px;">
                                                        <p style="color: #1A1C21;">
                                                        </p>
                                                    </td>
                                                    <td style="padding-block: 12px;">
                                                        <p style="color: #1A1C21;"></p>
                                                    </td>
                                                    <td style="padding-block: 12px; text-align: end;border-block:1px solid #D7DAE0;">
                                                        <p style="color: #1A1C21;margin-top: 1rem;">Total</p>
                                                    </td>
                                                    <td style="padding-block: 12px; text-align: end;border-block:1px solid #D7DAE0;">
                                                        <p style="color: #1A1C21; margin-top: 1rem;">${data?.transaction_data?.amount}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                            </tbody>
                        </table>
                    </td>
                </tr>
        </table>
         <div style="margin-top: 3rem;">
            <div style="color: #5E6470;">
                <div>Transaction Desc : ${data?.transaction_data?.transaction_error_desc}</div>
                <div>Transaction Method : ${data?.transaction_data?.payment_method_type}</div>
            </div>
        </div>
        <tr>
              <td colspan="3">
                <p style="font-size: 12px; color: #5E6470; text-align: start;padding-top: 25px;margin-top: 3rem;">
                    <b>
                        Cloud ECS Infotech Pvt Ltd,
                    </b>
                    766, Sakthi Tower Ln, Anna Salai,Thousand Lights,
                    Chennai-02.<br/>
                    Any questions, contact customer service at 
                    <a href="mailto:ecsaio.in" style="color: #000;">ecsaio.in</a>
                </p>
            </td>
        </tr>
    </div>
</body>

</html>
`;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = mailContent;
    document.body.appendChild(tempDiv);

    const canvas = await html2canvas(tempDiv);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${data?.transaction_data?.transactionid}_Transaction.pdf`);

    document.body.removeChild(tempDiv);
  };


  return (
    <div className="container py-2">
      <div
        className="row justify-content-center"
        style={{ marginTop: "4.5rem" }}
      >
        <div className="col-12">
          <div className="p-4 text-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <img
                src={Success}
                className="img-fluid img-responsive success-img"
                alt="Success"
                style={{ maxHeight: "6em" }}
              />
            </div>
            <span className="badge rounded-pill mt-3"
              style={{ backgroundColor: "#d4edda", color: "#28A745", fontWeight: "lighter" }}>
              Payment Successful
            </span>
            <p className="mt-3 h5"
              style={{ marginBottom: "6rem" }}>
              Your payment has been successfully<br /> processed!</p>

            <a className="mt-3 mb-0"
              style={{ fontWeight: "500", cursor: "pointer", color: "#28A745" }}
              onClick={generatePDF}
            >Download Invoice
            </a>

            <p className="mt-3 mb-0"
              style={{ fontWeight: "500" }}>Note:</p>
            <p className="success-note">You’ll receive an email with the transaction details.<br />
              Please do not refresh or close this page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
