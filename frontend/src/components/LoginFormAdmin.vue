<template>
<div class= "flex justify-center" id="bg" >
    <div class="min-h-full w-1/2   text-gray-800 antialiased px-4 py-30  sm:py-12 border-width:30px">
        <div class="relative py-3 sm:max-w-xl mx-auto text-center ">
            <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-green-700 rounded-t-md" ></div>
                <div class="py-6 ps-8">      
                 <center><img src="../assets/dnsc_bg.png" id="img">
                              <span id="signup">Requesting Management System</span> <br><br>
                </center>

                <div class="mx-4">
                    <div class="mx-4">
                        <label class="block font-normal  ml-1">Email</label>
                        <input type="email" v-model="Email" placeholder="Email" required class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                    </div>
                    
                    <div class="mx-4">
                        <label class="block mt-3 font-normal  ml-1">Password</label>
                        <input type="password" v-model="Password" placeholder="Password" required class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                    </div>
                     <div class="flex justify-center items-baseline mx-4">
                        <button type="submit" class="mt-4 w-full bg-green-700 text-white py-2 px-6 rounded-lg text-my-50" @click="signin">SIGN IN</button>
                    </div>
                    <div class="flex justify-center items-baseline">
                        <router-link class="text-sm hover:underline mt-4 mr-6 nav-link" :to="{name: 'SignUpAdmin'}">Not Yet Have Account? <span class="click"> Click Here </span> </router-link>
                        

                    </div>

                </div>
                    
                </div>

            </div>   
        </div>
    </div>
   
</div>


  
</template>

<script>
import axios from 'axios'

  export default {
    name: 'SignUpUser',
    data(){
      return {
        Email: '',
        Password: ''
      }
    },
    methods:{

      async signin(){

        let data = {
        'Email': this.Email,
        'Password': this.Password,
        'Position': this.Instructor,
        }

        axios.post("http://localhost:3307/auth", data).then((res) => {
        console.log(res);

            if(res.data.length > 0){
              localStorage.setItem('userData', res.data[0]);
              this.$router.push('/');
            }else{
              alert('Incorrect Email and Password');
            }

     
      });



       
      }

    }
  }

</script>

<style>
#img{
  width: 200px;
  height: 180px;
}
#signup{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30px;}
#bg{
    
    background:linear-gradient(90deg,  #006633, #00994C, #00CC66)
}
.click{
    color: blue;
}
</style>