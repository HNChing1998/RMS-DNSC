<template>
<div class="" >
  <!--FORM--> 
  <div id="app">
    <form action="">
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <!--HEADER-->  
            <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    CREATE REQUEST
                </h3>
                <button @click="showModal=false" type="button"  data-dismiss="modal" aria-label="Close" class="Close  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5 cursor-pointer hover: text-gray-600 transition duration-500 hover:scale-125 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
          <div class="mx-4">
           <!--SUBJECT-->
              <div class="mx-4 mt-5">
                      <div class="relative" >
                        <input type="text" id="subject" v-model="subject" class=" container p-16 font-medium text-base text-justify border-b py-1 w-full focus:outline-none focus:border-green-900 focus:border-b-2 transition-colors peer" autocomplete="off">
                           <label for="Subject" class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-600 transition-all">Subject:</label>
                      </div><hr>
              </div>
                 <!--DESCRIPTION-->
              <div class="mx-4">
                 <textarea id="textArea" v-model="description" type="text" placeholder="Description" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-900 rounded-md text-gray-500 text-sm" required></textarea>
              </div>
                  <div class="flex space-x-5 space-y-35  justify-end items-baseline" >
                         <button @click="showModal=false"> <span class="cursor-pointer hover: text-red-600 transition duration-500 hover:scale-125 " > Cancel</span></button> 
                          <button @click="submitInput"><span type="submit" class=" cursor-pointer hover: text-green-600 transition duration-500 hover:scale-125"  >Continue</span></button>
                          
                  </div>                    
          </div>
      </div>
    </transition>
   </form>
  </div>
  <!--TABLE-->
   <div class="px-6 pt-6 2xl sm:px-8 ">
     
  <div class="  ml-56 ">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">REQUEST</h2>
      
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
       <!--BUTTON-->
   
      <button class="absolute right-8    bg-gradient-to-r from-green-900 to-green-700  py-2 px-6 rounded-lg " id="crtrqst" @click="showModal=true">
        <b>+</b>CREATE REQUEST 
      </button>
    
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal px-6 pt-6 2xl:container">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                SUBJECT
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               DESCRIPTION
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subject, description, index) in subject, description" :key="index">
              <td class=" mr-5 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="text-gray-900 whitespace-no-wrap font-semibold">
                   <p >Error Login in Iaims Account {{subject}}</p>
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap"></p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
               <p>{{description}}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Paid</span>
                </span>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
</div>

</div>

  
</template>

<script>
export default {
  name: 'UserTable',
  dscpt: 'description',
  props:{
    msg:String
  },
    el:'#app',
    data(){
        return{
            showModal:true
        }
    },
    methods:{
      submitInput(){
       this.subject.push({
          name: this.subject,
          dscpt:this.description

        });

      }

    }
  

}


</script>

<style>
#crtrqst{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(248, 248, 207);
  
}


.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #126b2e, #168259);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 

}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 500%;
 max-width: 1000px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 
 
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
#textArea{
   height: 250px;
}
#head{
    margin-bottom: 30x;
}

</style>