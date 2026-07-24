// ==========================================
// Web Server ด้วย Node.js
// ผู้จัดทำ : นางสาวรักษิกา สันดี
// รหัสนักศึกษา : 69319011537
// ==========================================

// 1. เรียกใช้งาน Module http
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Web Server
const server = http.createServer((req, res) => {

    // กำหนดสถานะการตอบกลับ
    res.statusCode = 200;

    // กำหนดชนิดข้อมูลเป็น HTML และรองรับภาษาไทย
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // หน้าเว็บ HTML
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <title>My Web Server</title>

    <style>
        body{
            margin:0;
            padding:0;
            font-family:Tahoma, sans-serif;
            background:linear-gradient(135deg,#4facfe,#00f2fe);
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .card{
            width:600px;
            background:#ffffff;
            padding:40px;
            border-radius:20px;
            text-align:center;
            box-shadow:0 10px 25px rgba(0,0,0,.2);
        }

        h1{
            color:#0077cc;
            margin-bottom:15px;
        }

        h2{
            color:#444;
            margin:10px 0;
        }

        p{
            color:#666;
            font-size:18px;
        }

        .status{
            display:inline-block;
            margin-top:20px;
            background:#28a745;
            color:white;
            padding:10px 25px;
            border-radius:30px;
            font-weight:bold;
        }

        footer{
            margin-top:25px;
            color:#999;
            font-size:14px;
        }
    </style>

</head>

<body>

    <div class="card">

        <h1>🌐 Welcome to My Web Server</h1>

        <h2>นางสาวรักษิกา สันดี</h2>

        <p><strong>รหัสนักศึกษา :</strong> 69319011537</p>

        <div class="status">
            ✅ Railway Server กำลังทำงานปกติ
        </div>

        <footer>
            Node.js Web Server | Information Technology
        </footer>

    </div>

</body>
</html>
    `);
});

// 4. เปิดใช้งาน Server
server.listen(port, () => {
    console.log("==================================");
    console.log("🚀 Web Server Started Successfully");
    console.log(`🌐 Running on Port : ${port}`);
    console.log("==================================");
});
