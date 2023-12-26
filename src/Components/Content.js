import React from "react";
import "./Content.css";
import Admin from "../assets/Admin.png";
import Chart from "../assets/Chart.png";
import State from "../assets/useState.png";
import Effect from "../assets/useEffect.png";
import Context from "../assets/useContext.png";
import rRouter from "../assets/Router.png";
import Auth from "../assets/Auth.jpg";
import Firebase from "../assets/Firebase.png";
const Content = () => {
  return (
    <div className="content-main">
      <div className="content content-admin">
        <div>
          <h2 className="header-text">Admin Template</h2>
          <hr className="admin-line" />
          <p>
            Admin Template คือ
            โครงสร้างของโปรเจกต์ที่ถูกออกแบบมาเพื่อให้ความสะดวกสบายในการพัฒนาและสร้างหน้าจอส่วนการจัดการของเว็บแอปพลิเคชันหรือเว็บไซต์
          </p>
          <p>
            และการที่จะใช้งาน Admin Template ใน React ได้ต้องติดต้องก่อน
            โดยใช้คำสั่ง npm init react-admin test-admin
          </p>
        </div>
        <img className="admin" src={Admin} alt="Admin.png" />
      </div>

      <hr className="content-underline" />

      <div className="content content-chart">
        <img className="chart" src={Chart} alt="Google Chart.png" />
        <div>
          <h2 className="header-text">Google Chart</h2>
          <hr className="chart-line" />
          <p>
            Google Chart คือ บริการสร้างกราฟและแผนภูมิต่าง ๆ โดยใช้ JavaScript
            หรือ API อื่น ๆ ที่มีอยู่ใน Google Charts Library
          </p>
          <p>
            และการที่จะใช้งาน Google Chart ใน React ได้ต้องติดต้องก่อน
            โดยใช้คำสั่ง npm install --save react-google-charts
          </p>
        </div>
      </div>

      <hr className="content-underline" />

      <div className="content content-state">
        <div>
          <h2 className="header-text">useState</h2>
          <hr className="state-line" />
          <p>
            useState คือ Hook ใน React ที่ใช้สำหรับประกาศ state ใน Function
            Component ซึ่งทำให้สามารถจัดเก็บข้อมูลที่มีการเปลี่ยนแปลงได้
          </p>
        </div>
        <img className="state" src={State} alt="useState.png" />
      </div>

      <hr className="content-underline" />

      <div className="content content-effect">
        <img className="effect" src={Effect} alt="useEffect.png" />
        <div>
          <h2 className="header-text">useEffect</h2>
          <hr className="effect-line" />
          <p>
            useEffect คือ Hook ใน React ที่ใช้ทำงานหลังจาก rendering
            เสร็จสมบรูณ์ หรือหลังจาก state หรือ props มีการเปลี่ยนแปลง
            เพื่อจัดการกับผลกระทบใน Function Componet
          </p>
        </div>
      </div>

      <hr className="content-underline" />

      <div className="content content-context">
        <div>
          <h2 className="header-text">useContext</h2>
          <hr className="context-line" />
          <p>
            useContext คือ Hook ใน React
            ที่ใช้จัดเก็บข้อมูลส่วนกลางเพื่อแชร์ข้อมูลระหว่าง Component
            โดยไม่ต้องส่งผ่าน props ไปหลายๆระดับของ Component Tree
          </p>
        </div>
        <img className="context" src={Context} alt="useContext.png" />
      </div>

      <hr className="content-underline" />

      <div className="content content-router">
        <img className="router" src={rRouter} alt="Router.png" />
        <div>
          <h2 className="header-text">React Router</h2>
          <hr className="router-line" />
          <p>
            React Router คือ ไลบรารีใน React ที่ช่วยจัดการการนำทางในแอปพลิเคชัน
            React
          </p>
          <p>• Link ใช้ในการสร้างลิงก์ที่จะนำไปยังเส้นทางที่กำหนด</p>
          <p>• Router ใช้ครอบโค้ดทั้งหมดของแอปพลิเคชัน</p>
          <p>• Routes ใช้กำหนดเส้นทางและเป็น Componet ที่ใช้รวมกลุ่ม Route</p>
          <p>
            • Route ใช้กำหนด Component ที่จะแสดงเมื่อมีการเข้าถึงเส้นทางที่กำหนด
          </p>
          <p>
            และการที่จะใช้งาน React Router ได้ต้องติดต้องก่อน โดยใช้คำสั่ง npm i
            react-router-dom
          </p>
        </div>
      </div>

      <hr className="content-underline" />

      <div className="content content-auth">
        <div>
          <h2 className="header-text">Google Authentication</h2>
          <hr className="auth-line" />
          <p>
            Google Authentication คือ กระบวนการยืนยันตัวตนโดยใช้บัญชี Google
            เพื่อให้ผู้ใช้สามารถเข้าสู่ระบบในแอปพลิเคชันหรือเว็บไซต์ได้
          </p>
          <p>
            และการที่จะใช้งาน Google Authentication ใน React ได้ต้องติดต้องก่อน
            โดยใช้คำสั่ง npm install @react-oauth/google@latest
          </p>
        </div>
        <img className="auth" src={Auth} alt="Auth.jpg" />
      </div>

      <hr className="content-underline" />

      <div className="content content-firebase">
        <img className="firebase" src={Firebase} alt="Fire base.png" />
        <div>
          <h2 className="header-text">Firebase</h2>
          <hr className="firebase-line" />
          <p>
            Firebase คือ บริการคลาวด์ที่ได้รับการพัฒนาโดย Google
            ซึ่งมีคุณสมบัติและบริการต่างๆ เช่น การจัดการข้อมูลแบบ real-time,
            authentication, hosting, storage
          </p>
          <p>
            และการที่จะใช้งาน Firebase ใน React ได้ต้องติดต้องก่อน โดยใช้คำสั่ง
            npm install firebase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
