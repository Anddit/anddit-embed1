<template>
  <div class="hover:bg-gray-100 min-h-40 py-4 my-4 border border-gray-200 bg-white ">
    <a
      :href="'https://anddit.com/organizations/' + organization.id"
      target="_blank"
      class="hover:no-underline no-underline min-h-full"
    >
      <div
        class="flex flex-row  h-full pl-4 my-1 w-full  "
      >
        <div class=" w-1/3 px-10">
        <div class="flex flex-row ">
        
            <div  v-if="organization.image_path" class="h-56 flex rounded justify-right items-start  overflow-hidden" >
              <img
                :src="organization.image_path"
                class="object-cover align-right min-h-40 max-h-full w-full justify-right items-end"
                
              />
        
            </div>
          </div>
        </div>

          <div class="w-1/2 border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col  leading-normal ">
          


        <div class="flex flex-col h-full w-full px-3 justify-between">
          <div class="w-full">
          <div class="flex flex-row w-full justify-between">
          <div
            v-if="organization.location"
            class="flex flex-row w-full items-start justify-left "
          >
            <div
              class="text-gray-600 text-xs items-start tracking-normal align-middle my-auto t4 "
            >
              Serves {{ organization.location }}
            </div>
          </div>
          <div
            v-if="organization.cac2_approved"
            class="block  text-base "
          >
            <div
              class="rounded-full py-2 px-2  border-none bg-gray-200"
          
            >
              <img
                
                src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                class="h-5 w-5"
               
              />
            </div>
          </div>
         </div>
            <div class="inline-flex items-center justify-between w-full mb-2">
              <a
                :href="'https://anddit.com/organizations/' + organization.id"
                class="text-gray-800 newtitlecolor hover:underline hover:text-primary text-2xl align-middle justify-left t2 leading-tight tracking-tight cardtitle"
              >
                {{ organization.name }}
              </a>
             
            </div>
            
          
       
          <div
            class="text-lg tracking-tight leading-tight  mb-4 text-gray-600  w-full  t0"
          >
            <div>
              {{ organization.mission | truncate(150) }}
            </div>
          </div>
        </div>
        </div>
        <div class="flex flex-row  w-full items-start px-2">
            <div
              v-if="organization.known_for"
              class="flex flex-row items-start w-full pb-3 text-sm "
            >
              <div class="h-full inline">
                <AwardIcon class="inline text-primary mr-3 h-5  align-left text-xs" />
              </div>
              <div
                class="highlightstyle h-full inline text- no-underline leading-tight tracking-tight  t4 text-blue-900 text-base"
              >
                {{ organization.known_for | truncate(110) }}
              </div>
            </div>
          </div>
      </div>

     <!--  <div class="flex flex-row w-1/3 items-start">
          <div
            v-if="organization.known_for"
            class="flex  inline-flex items-start w-full pb-3   text-sm "
          >
            <div
              class="rounded-full py-2 px-2 mr-3 border-none"
              style="background: #ebf2fe;"
            >
              <AwardIcon class="text-primary h-4 w-auto align-left text-xs" />
            </div>
            <div
              class="highlightstyle text- no-underline leading-tight tracking-tight mt-1 t4 text-gray-800 text-base"
            >
              {{ organization.known_for | truncate(110) }}
            </div>
          </div>
        </div> -->
   <!--  <div class="flex flex-col w-1/3 ">
      <div
        class="text-base tracking-tight leading-tight mt-2 mb-1 text-gray-600 px-3 w-full md:w-11/12 t0"
      >
        <div>
          {{ organization.mission | truncate(150) }}
        </div>
      </div>
      <div class="flex flex-row  items-start">
      

          <div
            v-if="organization.cac2_approved"
            class="flex  inline-flex items-center w-3/4   text-base "
          >
            <div
              class="rounded-full py-2 px-2 mr-3 border-none bg-gray-200"
         
            >
              <img
                
                src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                class="h-4 w-auto"
               
              />
            </div>
            <div
              class="highlightstyle text- no-underline leading-tight tracking-tight mt-1 t0 text-gray-800 text-sm"
            >
             CAC2 Member
            </div>
          </div>


          </div>

      
</div> -->
  
      




      </div>
    </a>
  </div>
</template>

<script>
import { AwardIcon } from "vue-feather-icons"

export default {
  name: "OrganizationCard",

  components: {
    AwardIcon,
  },

  filters: {
    truncate: function (value, limit) {
      if (!value) return ""
      else if (value.length > limit) {
        value = value.substring(0, limit - 3) + "..."
      }
      return value
    },
  },

  props: {
    organization: {
      required: true,
      type: Object,
    },
  },
}
</script>
