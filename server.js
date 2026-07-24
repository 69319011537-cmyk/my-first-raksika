// เรียกใช้งาน Module http
const http = require("http");

// กำหนด Port
const port = process.env.PORT || 3000;

// สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web Server ของ รักษิกา สันดี</title>

<style>

body{
    margin:0;
    font-family:Tahoma,sans-serif;
    background:linear-gradient(135deg,#4facfe,#00f2fe);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.card{
    background:#fff;
    width:430px;
    padding:30px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,.3);
}

img{
    width:140px;
    height:140px;
    border-radius:50%;
    border:5px solid #0984e3;
    object-fit:cover;
}

h1{
    color:#0984e3;
}

.info{
    text-align:left;
    margin-top:20px;
    line-height:1.8;
    font-size:17px;
}

.status{
    margin-top:20px;
    background:#d4edda;
    color:#155724;
    padding:12px;
    border-radius:10px;
    font-weight:bold;
}

button{
    margin-top:20px;
    padding:12px 25px;
    border:none;
    border-radius:30px;
    background:#0984e3;
    color:white;
    cursor:pointer;
    font-size:17px;
}

button:hover{
    background:#0652DD;
}

#about{
    display:none;
    margin-top:15px;
    background:#f5f5f5;
    padding:15px;
    border-radius:10px;
}

footer{
    margin-top:20px;
    color:#777;
}

</style>
</head>

<body>

<div class="card">

    <img src="my-photo.jpg" alt="My Photo">

    <h1>🚀 My Web Server</h1>

    <h2>นางสาวรักษิกา สันดี (ฟ้า)</h2>

    <div class="info">
        <strong>🆔 รหัสนักศึกษา :</strong> 69319011537<br>
        <strong>🏫 ห้องเรียน :</strong> HIT.1/1 V (A)<br>
        <strong>💻 สาขา :</strong> เทคโนโลยีสารสนเทศ
    </div>

    <button onclick="showAbout()">👤 รู้จักฉัน</button>

    <div id="about">
        <p>
        <strong>คติประจำใจ</strong><br><br>
        "อดีตคือบทเรียน และจำไว้ว่าคนเซียนเขาไม่เรียนบทเดิม"
        </p>
    </div>

    <div class="status">
        ✅ เครื่องแม่ข่ายกำลังทำงานบนระบบ Railway เรียบร้อยแล้ว
    </div>

    <footer>
        © 2026 Web Server by Raksika Sandee
    </footer>

</div>

<script>
function showAbout(){
    let about=document.getElementById("about");

    if(about.style.display==="block"){
        about.style.display="none";
    }else{
        about.style.display="block";
    }
}
</script>

</body>
</html>
`);
});

// เริ่มต้น Server
server.listen(port, () => {
    console.log(
        `🚀 Server is running at http://localhost:${port}`
    );
});
