<template>
<div class= "flex justify-center" id="bg" >
    <div class="min-h-full w-1/2 text-gray-800 antialiased px-4 py-30  sm:py-12 border-width:30px">
        <div class="relative py-3 sm:max-w-xl mx-auto text-center ">
            <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-green-700 rounded-t-md" ></div>
                <div class="py-6 ps-8">      
                 <center><img src="../assets/dnsc_bg.png" id="img">
                              <span id="signup">Requesting Management System</span> <br><br>
                </center>
                <center>
                  <span id="signup" style="font-size:25px">Choose Type:</span>
                </center>
                <div class="mx-4">
                     <div class="flex justify-center items-baseline mx-4">
                       <router-link class="text-sm hover:underline mt-4 mr-6 nav-link" :to="{name: 'LoginFormUser'}">
                        <button type="submit" class="mt-4 w-50px bg-green-700 text-white py-2 px-6 rounded-lg text-my-50"> REQUESTOR </button>
                        </router-link>

                    <div class="flex justify-center items-baseline mx-4">
                      <router-link class="text-sm hover:underline mt-4 mr-6 nav-link" :to="{name: 'LoginFormAdmin'}">
                        <button type="submit" class="mt-4 w-full bg-green-700 text-white py-2 px-6 rounded-lg text-my-50">INSTRUCTOR</button>
                         </router-link>
                    </div>
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


  export default {
    name: 'LoginFormUser',
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
    
    background:linear-gradient(90deg,  #006633, #00994C, #00CC66);
    height: 694px;
}
.click{
    color: blue;
}
</style>