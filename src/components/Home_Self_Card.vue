<template>
  <div class="Self_Card" id="SelfCard">
    <div class="left_trans">
      <div class="wrap">
        <div class="box-top">
          <div class="image"></div>
        </div>
        <div class="box-bottom">
          <h2>Rolling Rock</h2>
          <p>A learning Rock</p>
        </div>
        <div class="box-bottom2">
          <ul style="padding: 0">
            <li>
              <p>
                Github:<a
                  href="https://github.com/arthur262"
                  style="text-decoration: none"
                  >https://github.com/arthur262</a
                >
              </p>
            </li>
            <li>
              <p>WX: arthur262_</p>
            </li>

            <li> <p>QQ: 508041945</p> </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="back"></div>
    <div class="right_trans"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.Self_Card {
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 70ch;
  display: flex;
}

.back {
  width: 200ch;
  margin: 0 auto;
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/3G8A2675.jpg");
  background-size: 100% 100%;
  height: 70ch;
}

.wrap {
  margin: 15ch 4ch 0 2ch;
  float: right;
  position: relative;
  width: 240px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 0 0 30px 30px;
}

.right_trans {
  width: calc((100%-200ch) / 2);
  background-image: linear-gradient(270deg, #2f4f4f, #000000);
}

.left_trans {
  width: calc((100%-200ch) / 2);
  background-image: linear-gradient(90deg, #2f4f4f, #000000);
}

.box-top {
  position: relative;
  width: 240px;
  height: 100px;
  background-color: #666666;
  display: flex;
  justify-content: center;
  transition: 0.5s;
}

.box-top::after {
  content: "";
  width: 40px;
  height: 40px;
  clip-path: polygon(50% 40%, 0 0, 100% 0);
  background-color: #666666;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -38px;
  z-index: 999;
}

.image {
  position: absolute;
  top: 10px;
  width: 60px;
  height: 60px;
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/mmexport1640288180459.png");
  background-size: cover;
  border: 3px solid #cccccc;
  transition: 0.5s;
}

/* -------------------------------------------- */
/* two box */
/* -------------------------------------------- */
.box-bottom {
  position: absolute;
  top: 100px;
  line-height: 1.5em;
  width: 240px;
  height: 60px;
  text-align: center;
}

.box-bottom2 {
  position: absolute;
  width: 240px;
  height: 100px;
  padding: 0;
  transition: 0.5s;
  line-height: 0.5em;
  font-size: 0.5em;
}

.box-bottom h2 {
  font-size: 1em;
  line-height: 1em;
  display: block;
  margin: 20px 0 5px 0;
  font: 1em;
}

.box-bottom p {
  margin: 10px 0 5px 0;
}

.box-bottom h2::after {
  content: "";
  display: block;
  width: 200px;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4px);
}

.box-bottom2 {
  top: 300px;
  height: 200px;
}

.box-bottom2 li {
  margin: 22px;
  font-size: 0.5em;
  transition: 0.2s;
}

/* -------------------------------------------- */
/* animation */
/* -------------------------------------------- */
.wrap:hover .box-top {
  height: 50px;
}

.wrap:hover .image {
  width: 35px;
  height: 35px;
  border-width: 1px;
  transform: translate(-90px, -5px);
}

.wrap:hover .box-bottom {
  top: 300px;
}

.wrap:hover .box-bottom2 {
  top: 50px;
}

.Self_Card{


}
.Self_Card div{
    justify-content:center;
    align-items:center;
}
.front{
    
}
.images{

}
.content{

}
</style>