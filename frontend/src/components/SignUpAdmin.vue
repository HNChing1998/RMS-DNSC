<template>
<!-- <form class= "flex justify-center"> -->
 <form class= "flex justify-center" id="bg">
  <div class="min-h-full w-1/2   text-gray-800 antialiased px-4 py-30  sm:py-12 border-width:30px">
        <div class="relative py-3 sm:max-w-xl mx-auto text-center ">
            <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-green-700 rounded-t-md" ></div>
                    <div class="py-6 ps-8">
                        <center><img src="../assets/dnsc_bg.png" id="img">
                          <span id="signup">Sign up Account</span>
                        </center>
                    <div class="mx-4">
                        <div class="">
                          <label class="block font-normal ml-1">Fullname</label>
                          <input type="text" placeholder="Fullname" v-model="Fullname" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                        </div>
                          <label class="block mt-3 font-normal ml-1">Gender</label>
                        <div >
                          <select required name="Gender" id="Gender" v-model="Gender" class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500" >
                             <option value="Female">Female</option>
                             <option value="Male">Male</option>
                          </select>
                        </div>
                          <label class="block mt-3 font-normal ml-1">Email</label>
                        <div class="">
                          <input type="email" required placeholder="Email" v-model="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                        </div>
                          <label class="block mt-3 font-normal ml-1">Password</label>
                        <div class="">
                          <input type="password" required placeholder="Password" v-model="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                        </div>
                  
                        <div class="">
                           <label class="block mt-3 font-normal ml-1">Institute</label>
                           <select name="Institute" id="Institute" v-model="Institute" class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                              <option value="Institute of Aquatic and Applied Sciences">Institute of Aquatic and Applied Sciences</option>
                              <option value="Institute of Computing">Institute of Computing</option>
                              <option value="Institute of Leadership, Entrepreneurship and Good Governance">Institute of Leadership, Entrepreneurship and Good Governance</option>
                              <option value="Institute of Teacher Education">Institute of Teacher Education</option>
                            </select>
                        </div>

                        <div class="">
                          <label class="block mt-3 font-normal ml-1">Role</label>
                            <select name="Position" id="Position" v-model="Position" class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500">
                              <option value="Student">Student</option>
                              <option value="Instructor">Instructor</option>
                        
                            </select>
                       </div>

                       <div class="">
                          
                            <input type="hidden" placeholder="Type" v-model="Type" value="Admin">
                       </div>

                   

                       





                        <div class="flex justify-center items-baseline mx-4">
                            <button :disabled="!validateEmail" class="mt-4 w-full bg-green-700 text-white py-2 px-6 rounded-lg" @click="userSignup()">SIGNUP</button>
                        </div>
                        <div class="flex justify-center items-baseline">
                       
                            <router-link class="text-sm hover:underline mt-4 mr-6 nav-link" :to="{name: 'LoginFormUser'}">Have Account? <span class="click">Click Here!</span> </router-link>
                        

                        </div>

                    </div>
                    
                </div>

            </div>   
        </div>
    </div>
 </form>
   
<!-- </form> -->


  
</template>



<script>
import axios from "axios";
export default {
  name: 'LoginForm',
 
  data:() => ({
   
    Fullname: null,
    Email: null,
    Password: null,
    Institute: null,
    Gender: null,
    Position: null,
    Type: 'Admin',
  



  }),

  methods:{
    submitEmail(){
       alert("Validated Email")
    },
    validateEmail(Email){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(Email);
    },



    userSignup(){

      let data = {
        'Fullname': this.Fullname,
        'Gender': this.Gender,
        'Email': this.Email,
        'Password': this.Password,
        'Institute': this.Institute,
        'Position': this.Position,
        'Type': this.Type,
      };
      
    
      axios.post("http://localhost:3307/users", data).then((res) => {
        console.log(res);
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
  font-size: 35px;

}
.click{
  color: blue;
}
#bg{
    
    background:linear-gradient(90deg,	#006633, #00994C, #00CC66);
  
}

</style>