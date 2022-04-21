<template >
 <form class= "flex justify-center">
  <div class="min-h-full w-1/2   text-gray-800 antialiased px-4 py-30  sm:py-12 border-width:30px">
        <div class="relative py-3 text-center ">
            <div class="relative items-center mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div class="h-2 bg-green-700 rounded-t-md" >
                    <header class="bg-green-900 py-2   md:py-4">
                         <span class="text-white ml-5 text-3xl" id="update" >Update Account</span>
                    </header>
                </div>
                <div class="py-6 ps-8">
                  
                    <center>
                      <div class="items-center justify-center bg-grey-lighter" >
                             <!--UPLOAD PHOTO-->
                           
                         <label id="box" class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide  hover: transition duration-1 hover:scale-110 border border-blue cursor-pointer hover:bg-blue hover:text-green-500">
                           <!--LOGO-->
                            <div class="w-45 h-45 bg-white rounded-full">
                              <img src="../assets/user.png"  class="w-2 h-2 m-auto rounded-full object-cover lg:w-28 lg:h-28">
                            </div>
                           
                             <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /></svg>
                              <span class="mt-2 text-base leading-normal">Choose Profile</span>
                              <input type='file' class="hidden" />
                              
                         </label>
                         
                         
                      </div>
                      <div class="items-center mt-5">
                        <!--UPLOAD BUTTON-->
                        <button class="bg-transparent uppercase hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-64"> upload</button>
                        
                      </div>
                  </center>

                    <div class="mx-4">
                      <div class=" relative">
                        <label class="block font-normal ml-1">Fullname</label>
                        
                        <input type="text" placeholder="Fullname" v-model="fullname" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500  hover: transition duration-1 hover:scale-110 " required> 
                        <span>{{fullname}}</span>
                    </div>
                    <label class="block mt-3 font-normal ml-1">Gender</label>
                    <div class=" relative flex ">
                      <select v-model="selected" class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500   hover: transition duration-1 hover:scale-110" >
                          <option disabled value="">Please select one</option>
                          <option>Female</option>
                          <option>Male</option>
                          
                      </select>
                    </div>
                     
                     <label class="block mt-3 font-normal ml-1">Password</label>
                    <div class="">
                        <input type="password" placeholder="Password" v-model="password" :toggle="true" @score="showscore" @feedback="showfeedback" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500  hover: transition duration-1 hover:scale-110 "   required >
                    </div>
                    <div></div>
                     
                    <div class="">
                      <label class="block mt-3 font-normal ml-1">Institute</label>
                       <select class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500  hover: transition duration-1 hover:scale-110">
                          <option value="">-- Choose Institute--</option>
                        <option value="">Institute of Aquatic and Applied Sciences</option>
                        <option value="">Institute of Computing</option>
                         <option value="">Institute of Leadership, Entrepreneurship and Good Governance</option>
                        <option value="">Institute of Teacher Education</option>
                       </select>
                    </div>
                     <label class="block mt-3 font-normal ml-4">Type: </label>
                    <div class="">
                      <select class="border w-full h-100 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md text-gray-500  hover: transition duration-1 hover:scale-110">
                       <option value="">-- Choose Type--</option>
                        <option value="">Student</option>
                        <option value="">Instructor</option>
                      </select>
                       
                    </div>
                    
                     <div class="flex justify-center items-baseline mx-4">
                        <button class="mt-4 w-full bg-yellow-600 text-white py-2 px-6 rounded-lg uppercase hover:bg-blue hover:bg-green-500 ">update</button>
                    </div>
                    

                    </div>
                    
                </div>

            </div>   
        </div>
    </div>
   
</form>
</template>

<script>
export default {

}
</script>

<style>
#update{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#box{
  margin-top: 50px;
}

</style>