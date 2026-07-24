// =============================================
// 🌸 Student Database Web Server 🌸
// ผู้จัดทำ : นางสาวรักษิกา สันดี
// =============================================

// เรียกใช้งาน Module
const http = require('http');
const { Pool } = require('pg');

// ตั้งค่าการเชื่อมต่อฐานข้อมูล PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// กำหนด Port
const port = process.env.PORT || 3000;

// สร้าง Web Server
const server = http.createServer(async (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    try {

        // เชื่อมต่อฐานข้อมูล
        const client = await pool.connect();

        // ดึงข้อมูลนักศึกษา
        const result = await client.query('SELECT * FROM students');

        // คืนการเชื่อมต่อ
        client.release();

        // HTML
        let html = `
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <title>Student Database</title>

            <style>

                body{
                    margin:0;
                    padding:30px;
                    font-family:'Tahoma',sans-serif;
                    background:linear-gradient(135deg,#FFD6E8,#C8E7FF);
                }

                .container{
                    max-width:900px;
                    margin:auto;
                    background:white;
                    border-radius:25px;
                    padding:30px;
                    box-shadow:0 10px 25px rgba(0,0,0,.2);
                }

                h1{
                    text-align:center;
                    color:#ff4f9a;
                    margin-bottom:5px;
                }

                h3{
                    text-align:center;
                    color:#666;
                    margin-bottom:30px;
                }

                table{
                    width:100%;
                    border-collapse:collapse;
                    overflow:hidden;
                    border-radius:15px;
                }

                th{
                    background:#ff80ab;
                    color:white;
                    padding:15px;
                    font-size:18px;
                }

                td{
                    padding:14px;
                    text-align:center;
                    border-bottom:1px solid #eee;
                    font-size:17px;
                }

                tr:nth-child(even){
                    background:#fff4f8;
                }

                tr:hover{
                    background:#ffe4ef;
                    transition:.3s;
                }

                .footer{
                    text-align:center;
                    margin-top:25px;
                    color:#888;
                    font-size:15px;
                }

                .badge{
                    display:inline-block;
                    background:#7dd87d;
                    color:white;
                    padding:8px 20px;
                    border-radius:30px;
                    font-weight:bold;
                    margin-top:15px;
                }

            </style>

        </head>

        <body>

            <div class="container">

                <h1>🎓 ฐานข้อมูลนักศึกษา 🎓</h1>

                <h3>🌸 ระบบเชื่อมต่อฐานข้อมูล PostgreSQL บน Railway 🌸</h3>

                <table>

                    <tr>
                        <th>📚 รหัสนักศึกษา</th>
                        <th>👩‍🎓 ชื่อ - นามสกุล</th>
                    </tr>
        `;

        // แสดงข้อมูลจากฐานข้อมูล
        result.rows.forEach(row => {
            html += `
                <tr>
                    <td>${row.student_id}</td>
                    <td>${row.student_name}</td>
                </tr>
            `;
        });

        html += `
                </table>

                <center>
                    <div class="badge">
                        ✅ เชื่อมต่อฐานข้อมูลสำเร็จ
                    </div>
                </center>

                <div class="footer">
                    💖 จัดทำโดย : นางสาวรักษิกา สันดี <br>
                    🌐 Node.js + PostgreSQL + Railway
                </div>

            </div>

        </body>
        </html>
        `;

        res.end(html);

    } catch (err) {

        console.error(err);

        res.end(`
        <body style="
            background:#ffe6e6;
            font-family:Tahoma;
            text-align:center;
            padding-top:120px;">
            <h1 style="color:red;">❌ เกิดข้อผิดพลาด</h1>
            <h2>${err.message}</h2>
            <p>กรุณาตรวจสอบการเชื่อมต่อฐานข้อมูล</p>
        </body>
        `);
    }

});

// เปิดใช้งาน Server
server.listen(port, () => {

    console.log("====================================");
    console.log("🌸 Student Database Server Started 🌸");
    console.log(`🚀 Running on Port : ${port}`);
    console.log("💖 PostgreSQL Connected via Railway");
    console.log("====================================");

});
