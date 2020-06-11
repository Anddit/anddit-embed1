<template>
  <ais-instant-search-ssr class="pb-6 " style="background: #f8fafc; background-color: #f8fafc;"
  >
  <transition name="fade" class=" mx-auto  ">
<div v-show="visible === 0"  class=" pt-8 px-4 sm:px-6 w-5/6 mx-auto   transition ease-in-out duration-150">
          
      <div class="relative  flex flex-col bg-primarylight border-primary rounded border-2 w-full  ">
          <div class=" sm:block absolute top-0 right-0 pt-4 pr-12">
                <button v-on:click="visible += 1" type="button" class="text-primary hover:text-gray-500 focus:outline-none focus:text-primary transition ease-in-out duration-150" aria-label="Close" >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
          <div class="flex w-full   container mx-auto">
              <div class="flex  flex-col md:w-full w-5/6 md:text-center mx-auto ">
                  <div class="flex flex-col mx-auto md:align-middle md:items-center">
                      <div class="w-full md:w-3/5 tracking-tight text-2xl md:text-3xl leading-tight my-4 pt-6 md:pt-3 t2  text-black">
                          A curated directory of the best organizations in childhood cancer. <br>
                          <p class="md:text-base text-sm text-gray-700 t0 my-2 pt-2  mx-auto">
                              a Coalition Against Childhood Cancer collaboration
                          </p>
                      </div>
                   
                    <!--   <a
                          href="/hope-portal"
                          class="no-underline hover:no-underline mt-4 md:mt-6">
                          <button
                              class="inline-flex rounded-full border border-primary px-5 py-3 my-auto items-center t2 text-primary bg-white hover:shadow-lg hover:no-underline">
                              <span class="no-underline hover:no-underline inline mr-2">
                                  Browse Organizations
                              </span>
                              <ArrowDownIcon class="h-4 inline stroke-current" />
                          </button>
                      </a> -->
                  </div>
              </div>
          </div>
          <div class="block h-48 h-full overflow-hidden w-full cac2 mx-auto items-end justify-center hover:no-underline no-underline">
              <img
                  src="https://anddit-v3-development.s3.us-east-2.amazonaws.com/Jess+and+Hero.png"
                  class="h-full w-auto mx-auto object-cover md:-mt-20"
                  style="max-height: 20rem;" />
          </div>
      </div>
     
  </div>
</transition>



    <div
      class="flex w-full py-4"
      style="background: #f8fafc; background-color: #f8fafc;"
    >
    <div class="flex flex-wrap w-5/6 mx-auto px-3">

     
     <div class="w-full ">
        <div class="flex flex-col w-full ">
          <div class="flex flex-col">
            <div class="flex md:flex-row flex-col w-full">
              <div class="flex flex-col w-full md:items-end px-3">
                <div class="flex md:items-end w-full">
                  <div class="flex flex-col mx-auto w-full tracking-tight">
                    <div class="flex flex-col w-full ">
                      <div
                        class="text-lg t2  text-black w-full pb-3"
                      >
                        Filters
                      </div>
                      <ul class="flex flex-row items-start mx-auto text-xs  w-full">
                        <li class="w-1/4 ">
                          <div
                            class="flex flex-row w-full justify-between "
                          >
                            <div
                              class="text-xs t2 uppercase text-gray-600 border-b border-gray-300 w-full "
                            >
                              CATEGORY
                            </div>

                          </div>
                          <ais-hierarchical-menu
                            :attributes="hierarchicalFacets"
                            :sort-by="['count:desc']"
                            class="t0 text-sm mt-2 tracking-tight"
                           />
                        </li>
                        <li class="flex flex-col  px-3  w-1/4">
                          <div
                            class="flex flex-row w-full "
                          >
                            <div
                              class="text-xs t2 border-b border-gray-300 uppercase text-gray-600 w-full "
                            >
                              LOCATION
                            </div>
                          </div>
                          <div
                            class="flex flex-col w-full mt-3"
                            style="minheight: 2rem;"
                          >
                            <div class="flex flex-col w-full relative">
                              <ais-refinement-list
                                attribute="states"
                                :limit="0"
                                show-more
                                :show-more-limit="60"
                                :sort-by="['name:asc']"
                                :transform-items="transformers2"
                                operator="or"
                              >
                                <div
                                  slot-scope="{
                                    items,
                                    isShowingMore,
                                    isFromSearch,
                                    canToggleShowMore,
                                    refine,
                                    createURL,
                                    toggleShowMore,
                                  }"
                                >
                                  <div
                                    class="w-full t0 overflow-y-auto text-sm"
                                  >
                                    <div class="w-full bg-white">
                                      <button
                                        :disabled="!canToggleShowMore"
                                        class="py-2 border border-gray-900 selectbutton w-full rounded"
                                        @click="toggleShowMore"
                                      >
                                        <div
                                          v-if="!isShowingMore"
                                          class="flex flex-row justify-between px-2"
                                        >
                                          <span
                                            class="t4 text-xs text-gray-600"
                                          >
                                            Select Location
                                          </span>
                                          <span class="t2 text-xs text-primary">
                                            <ChevronDownIcon
                                              class="h-4 inline"
                                            />
                                          </span>
                                        </div>
                                        <div
                                          v-else
                                          class="flex flex-row justify-between px-2"
                                        >
                                          <span class="t4 text-xs text-primary">
                                            Close
                                          </span>
                                          <ChevronUpIcon class="h-4 inline" />
                                        </div>
                                      </button>
                                      <ul
                                        class="absolute w-full z-10 bg-white overflow-y-auto px-3 shadow border-gray-100"
                                        style="maxHeight: 20rem;"
                                      >
                                        <div
                                          v-if="isShowingMore"
                                          :disabled="!canToggleShowMore"
                                          class="bg-white text-gray-500 t0 text-xs mb-1 mt-2"
                                          @click="toggleShowMore"
                                        >
                                          Scroll & select location
                                        </div>
                                        <li
                                          v-for="item in items"
                                          :key="item.value"
                                          class="mt-1"
                                        >
                                          <a
                                            :href="createURL(item.value)"
                                            class="flex flex-row items-center"
                                            @click.prevent="refine(item.value)"
                                          
                                          >
                                        <div class="w-1/5">
                                              <div
                                                class="mycheckbox w-4 h-4 rounded border justify-center items-center"
                                                
                                                :style="{
                                                  backgroundColor: item.isRefined
                                                    ? '#ebf2fe'
                                                    : '#fff',
                                                  borderColor: item.isRefined
                                                    ? '#1062ed !important'
                                                    : '#dee2e6',
                                                  borderWidth: '.5px',
                                                }"
                                              >
                                                <CheckIcon
                                                  v-if="item.isRefined"
                                                  class="w-3 h-3 mx-auto"
                                                />
                                              </div>
                                            </div>
                                            <div class="w-4/5">
                                              <ais-highlight
                                                attribute="item"
                                                :hit="item"
                                                :style="{
                                                  fontWeight: item.isRefined
                                                    ? 'bold'
                                                    : '',
                                                  color: item.isRefined
                                                    ? '#1062ed'
                                                    : '#4a5568',
                                                }"
                                                class="t0 items-center text-gray-700 text-sm"
                                              />
                                            </div>
                                          </a>
                                        </li>
                                        <div
                                          v-if="isShowingMore"
                                          :disabled="!canToggleShowMore"
                                          class="py-2 bg-white px-2 text-primary"
                                          @click="toggleShowMore"
                                        >
                                          Close
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </ais-refinement-list>
                            </div>
                          </div>
                          <div class="flex flex-col w-full items-center mt-2">
                            <div class="w-full">
                              <ais-toggle-refinement
                                attribute="states"
                                label="Serves United States"
                                on="USA United States"
                                class="text-xs"
                                
                              >
                                
                                <div
                                  slot-scope="{ value, refine, createURL }"
                                  class="flex flex-row items-center w-full justify-between mt-2 mb-1"
                                >
                                  <div
                                    class="t0 text-gray-700 text-xs"
                                    :style="{
                                      fontFamily: value.isRefined
                                        ? 'Avenir Next LT W01 Demi'
                                        : '',
                                      color: value.isRefined ? '#1062ed' : '',
                                    }"
                                  >
                                    Serves All United States
                                  </div>
                                  <div>
                                    <toggle-button
                                      v-model="value.isRefined ? true : false"
                                      :href="createURL(value)"
                                      :width="35"
                                      :sync="true"
                                      :height="22"
                                      class="flex items-center m-0"
                                      :color="{
                                        checked: '#1062ed',
                                        unchecked: '#cbd5e0',
                                      }"
                                      @change="refine(value)"
                                    />
                                  </div>
                                </div>
                              </ais-toggle-refinement>
                            </div>
                            <div class="w-full">
                              <ais-toggle-refinement
                                attribute="states"
                                label="Serves Canada"
                                on="CAN Canada"
                                class="text-xs"
                              >
                                <div
                                  slot-scope="{ value, refine, createURL }"
                                  class="flex flex-row items-center w-full justify-between my-1"
                                >
                                  <div
                                    class="t0 text-gray-700 text-xs"
                                    :style="{
                                      fontFamily: value.isRefined
                                        ? 'Avenir Next LT W01 Demi'
                                        : '',
                                      color: value.isRefined ? '#1062ed' : '',
                                    }"
                                  >
                                    Serves Canada
                                  </div>
                                  <toggle-button
                                    v-model="value.isRefined ? true : false"
                                    :href="createURL(value)"
                                    :width="35"
                                    :sync="true"
                                    :height="22"
                                    class="flex m-0"
                                    :color="{
                                      checked: '#1062ed',
                                      unchecked: '#cbd5e0',
                                    }"
                                    @change="refine(value)"
                                  />
                                </div>
                              </ais-toggle-refinement>
                            </div>
                          </div>
                        </li>
                        <li class="flex flex-col w-1/4 px-3 ">
                          <div
                            class="flex flex-row w-full justify-between items-center"
                          >
                            <div
                              class="text-xs t2 uppercase border-b border-gray-300 text-gray-600  w-full "
                            >
                              DIAGNOSIS TYPE
                            </div>
                          </div>
                          <div
                            class="flex flex-col w-full mt-4"
                            style="minheight: 2rem;"
                          >
                            <div class="flex flex-col w-full relative">
                              <ais-refinement-list
                                attribute="diagnoses"
                                :limit="0"
                                show-more
                                :show-more-limit="60"
                                :sort-by="['name:asc']"
                                :transform-items="transformers3"
                                operator="or"
                                class="w-full t0 overflow-y-auto text-sm"
                              >
                                <div
                                  slot-scope="{
                                    items,
                                    isShowingMore,
                                    isFromSearch,
                                    canToggleShowMore,
                                    refine,
                                    createURL,
                                    toggleShowMore,
                                  }"
                                  class="w-full"
                                >
                                  <button
                                    :disabled="!canToggleShowMore"
                                    class="py-2 border border-gray-900 selectbutton rounded w-full bg-white"
                                    @click="toggleShowMore"
                                  >
                                    <div
                                      v-if="!isShowingMore"
                                      class="flex flex-row justify-between px-2"
                                    >
                                      <span class="t4 text-xs text-gray-600">
                                        Select Diagnosis
                                      </span>
                                      <span class="t2 text-xs text-primary">
                                        <ChevronDownIcon class="h-4 inline" />
                                      </span>
                                    </div>
                                    <div
                                      v-else
                                      class="flex flex-row justify-between px-2"
                                    >
                                      <span class="t4 text-xs text-primary">
                                        Close
                                      </span>
                                      <ChevronUpIcon class="h-4 inline" />
                                    </div>
                                  </button>
                                  <ul
                                    class="absolute z-10 bg-white overflow-y-auto w-full px-3 shadow border-gray-100"
                                    style="maxheight: 20rem;"
                                  >
                                    <div
                                      v-if="isShowingMore"
                                      :disabled="!canToggleShowMore"
                                      class="bg-white text-gray-500 t0 text-xs mb-1 mt-2"
                                      @click="toggleShowMore"
                                    >
                                      Scroll & select diagnosis
                                    </div>
                                    <li
                                      v-for="item in items"
                                      :key="item.value"
                                      class="my-2"
                                    >
                                      <a
                                        :href="createURL(item.value)"
                                        class="flex flex-row items-center"
                                        @click.prevent="refine(item.value)"
                                      >
                                        <div class="w-1/5">
                                          <div
                                            class="mycheckbox w-4 h-4 rounded border items-center"
                                            :style="{
                                              backgroundColor: item.isRefined
                                                ? '#ebf2fe'
                                                : '#fff',
                                              borderColor: item.isRefined
                                                ? '#1062ed !important'
                                                : '#dee2e6',
                                              borderWidth: '.5px',
                                            }"
                                          >
                                            <CheckIcon
                                              v-if="item.isRefined"
                                              class="w-3 h-3 mx-auto my-auto"
                                            />
                                          </div>
                                        </div>
                                        <div class="w-4/5">
                                          <ais-highlight
                                            attribute="item"
                                            :hit="item"
                                            :style="{
                                              fontWeight: item.isRefined
                                              ? 'bold'
                                              : '',
                                              color: item.isRefined
                                              ? '#1062ed'
                                              : '#4a5568',
                                            }"
                                            class="t0 items-center text-gray-700 text-sm"
                                          />
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                               </ais-refinement-list>
                            </div>
                          </div>
                          <div class="w-full mt-2">
                            <ais-toggle-refinement
                              attribute="diagnoses"
                              label="Serves All Childhood Cancer"
                              on="All Childhood Cancer"
                              class="text-sm"
                            >
                              <div
                                slot-scope="{ value, refine, createURL }"
                                class="flex flex-row items-center w-full justify-between mt-2 mb-1"
                              >
                                <div
                                  class="t0 text-gray-700 text-xs"
                                  :style="{
                                    fontFamily: value.isRefined
                                      ? 'Avenir Next LT W01 Demi'
                                      : '',
                                    color: value.isRefined ? '#1062ed' : '',
                                  }"
                                >
                                  Serves All Childhood Cancer
                                </div>
                                <toggle-button
                                  v-model="value.isRefined ? true : false"
                                  :href="createURL(value)"
                                  :width="35"
                                  :sync="true"
                                  :height="22"
                                  class="flex m-0"
                                  :color="{ checked: '#1062ed', unchecked: '#cbd5e0' }"
                                  @change="refine(value)"
                                />
                              </div>
                            </ais-toggle-refinement>
                          </div>
                        </li>
                        <div
                          v-if="isShowingMore"
                          :disabled="!canToggleShowMore"
                          class="py-2 bg-white px-2 text-primary"
                          @click="toggleShowMore"
                        >
                          Close
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="flex flex-col mt-4">
                  <div
                class="flex flex-row w-full justify-between items-center">
                    <!-- <div class="text-xs t3 uppercase newtitlecolor mt-1 w-full pb-1">
                      MORE FILTERS
                    </div> -->
                  </div>
                  <div class="w-full">
                    <div class="flex flex-col w-full mt-2">
                      <div class="flex flex-col w-full">
                        <ais-refinement-list
                          attribute="tags_names"
                          :sort-by="['name:asc']"
                          operator="or"
                          class="w-full t0 overflow-y-auto text-sm"
                        >
                          
                          <div
                            slot-scope="{
                              items,
                              isFromSearch,
                              canToggleShowMore,
                              refine,
                              createURL,
                            }"
                            class="w-full"
                          >
                            <ul class="w-full px-3" style="maxheight: 20rem;">
                              <li
                                v-for="item in items"
                                :key="item.value"
                                class="mt-1"
                              >
                                <a
                                  :href="createURL(item.value)"
                                  class="flex flex-row items-center"
                                  @click.prevent="refine(item.value)"
                                >
                                  <div class="w-1/5">
                                    <div
                                      class="mycheckbox w-4 h-4 rounded border justify-center items-center"
                                      :style="{
                                        backgroundColor: item.isRefined
                                          ? '#ebf2fe'
                                          : '#fff',
                                        borderColor: item.isRefined
                                          ? '#1062ed !important'
                                          : '#dee2e6',
                                        borderWidth: '.5px',
                                      }"
                                    >
                                      <CheckIcon
                                        v-if="item.isRefined"
                                        class="w-3 h-3 mx-auto"
                                      />
                                    </div>
                                  </div>
                                  <div class="w-4/5">
                                    <ais-highlight
                                      attribute="item"
                                      :hit="item"
                                      :style="{
                                        fontWeight: item.isRefined
                                          ? 'bold'
                                          : '',
                                        color: item.isRefined
                                          ? '#1062ed'
                                          : '#4a5568',
                                      }"
                                      class="t0 items-center text-gray-700 text-sm"
                                    />
                                   
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </ais-refinement-list>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full px-3">
       
      <div class="flex flex-col mb-2">
        <div class="w-full ">
        <div class="flex flex-row rounded items-center w-full min-h-8 mt-1">
            <div class="flex flex-col w-full justify-between  ">
              <div class="flex flex-row w-full items-center">
                <div class="text-xs w-full items-start">
                  <ais-current-refinements
                    class="inline my-4"
                    :excluded-attributes="[
                      'nationalus',
                      'nationalcanada',
                      'allchildhoodcancer',
                    ]"
                  >
                    
                    <ul
                      slot-scope="{ items, createURL }"
                      class="flex flex-wrap mb-2"
                    >
                      
                      <li v-for="item in items" :key="item.attribute" class="">
                        <ul class="flex flex-wrap inline">
                          <li
                            v-for="refinement in item.refinements"
                            v-if="refinement.label !== ''"
                            :key="
                              [refinement.attribute, refinement.value].join(':')
                            "
                            class="px-1 items-center mt-2"
                          >
                            <a
                              v-if="refinement.label"
                              :href="createURL(refinement)"
                              class="flex flex-row text-xs text-gray-600 tagstyle tagstyle2 rounded-full bg-white border hover:no-underline border-blue-400 px-2 justify-between py-1 items-center h-full align-middle t4"
                              @click.prevent="item.refine(refinement)"
                            >
                              <span>
                                {{ refinement.label }}
                              </span>
                              <XIcon
                                class="ml-1 h-3 inline w-auto tagstyle2 align-middle"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ais-current-refinements>
                </div>
              </div>
            </div>
          </div>

          <div class="items-center flex flex-row w-full mb-2  justify-between  items-center">
            <div class="w-full text-left items-center">
              <ais-stats class="text-xs newtitlecolor items-center">
                <div
                  slot-scope="{ nbHits }"
                  class="items-center align-middle text-base t4 justify-left tracking-tight"
                >
                  <span class="text-black t4">{{ nbHits }} Organizations</span>
                </div>
              </ais-stats>
            </div>
            <div class="w-1/4 text-right items-center">
              <div class="text-xs text-gray-600 justify-right t0">
                <ais-clear-refinements class="">
                  <div slot-scope="{ canRefine, refine, createURL }">
                    <a
                      v-if="canRefine"
                      :href="createURL()"
                      class="text-xs text-primary px-1 underline"
                      @click.prevent="refine"
                    >
                       Clear Filters
                    </a>
                    <span v-else class="text-xs" />
                  </div>
                </ais-clear-refinements>
              </div>
            </div>
          </div>
          </div>

        
          

          <ais-hits :transform-items="transformItems" class="flex w-full">
            <div
              slot-scope="{ items }"
              class="flex flex-col w-full mb-4 leading-tight"
            >
              
              <organization-card
                v-for="item in items"
                :key="item.objectID"
                :organization="item"
              >
                >
              </organization-card>
            </div>
          </ais-hits>
          </div>
          <div class="flex-col w-full flex py-4 ">
            <ais-pagination
              :show-last="false"
              :show-first="false"
              class="w-full flex t4"
              :padding="2"
              @click.native="scrollToTop"
            />
            <div
              class="flex-row w-full py-4 text-gray-600 text-sm "
            >
              Listings do not constitute endorsements
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </ais-instant-search-ssr>
</template>

<script
  src="https://cdn.jsdelivr.net/npm/algoliasearch@3.33.0/dist/algoliasearchLite.min.js"
  integrity="sha256-3Laj91VXexjTlFLgL8+vvIq27laXdRmFIcO2miulgEs="
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/vue-instantsearch@2.0.1/dist/vue-instantsearch.js"
  integrity="sha256-hugfQrBAG8mfgKvHCfeNrTlM8/SZ/hKStvbvcpVPpaY="
  crossorigin="anonymous"
></script>

<script>
import Vue from "vue"
// import OrganizationCard from "@/components/OrganizationCard.vue"
import OrganizationCard from "@/components/OrganizationCard.vue"
import qs from 'qs';
import { ToggleButton } from "vue-js-toggle-button"
import { AwardIcon,
        MapPinIcon,
        CheckCircleIcon,
        LinkIcon,
        ArrowRightCircleIcon,
        SearchIcon,
        UsersIcon,
        CheckIcon,
        ChevronDownIcon,
        ChevronUpIcon,
        MessageSquareIcon,
        XIcon,
        HelpCircleIcon,
        ArrowDownIcon } from 'vue-feather-icons';

Vue.component("ToggleButton", ToggleButton)
// import { simple } from "instantsearch.js/es/lib/stateMappings"

import {
  AisInstantSearchSsr,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisHierarchicalMenu,
  AisPagination,
  AisToggleRefinement,
  AisCurrentRefinements,
  AisClearRefinements,
  AisQueryRuleCustomData,
  createInstantSearch,
} from "vue-instantsearch"
import algoliasearch from "algoliasearch/lite"

const searchClient = algoliasearch(
  "F62MOPA7KR",
  "85e52ff35b00c7ff5430ea1d182cb818"
)

const { instantsearch, rootMixin } = createInstantSearch({
  searchClient,
  indexName: "production_organizations",
  routing: true
})

const hierarchicalFacets = ["hierarch.lvl0", "hierarch.lvl1"]

export default {
  mixins: [rootMixin],

  asyncData({route}) {
    const params = qs.parse(route.fullPath.replace(/^.*\?/, ''));
    let visible = 0;
    return (
      instantsearch
      .findResultsState({
        // find out which parameters to use here using ais-state-results
        // query: '',
        // hitsPerPage: 10,
        
        query: params.query || '',
        hierarchicalFacets: [
          {
            name: "hierarch.lvl0",
            attributes: ["hierarch.lvl0", "hierarch.lvl1"],
            separator: " > ",
            rootPath: null,
            showParentLevel: true,
          },
        ],

        disjunctiveFacets: ["diagnoses", "tags_names", "states"],

        // disjunctiveFacetsRefinements: { 
        //   diagnoses: ['All Childhood Cancer'],
        //   tags_names: ['Survivorship'],
        //   states: ['USA United States'],

        //   }
      })
      .then(() => ({
        // instantSearchState: instantsearch.getState(),
        hierarchicalFacets,
        algoliaState: instantsearch.getState(),
        visible
      }))
      );
  },
  beforeMount() {
    instantsearch.hydrate(this.algoliaState)
  },
  mixins: [rootMixin],
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisHierarchicalMenu,
    AisPagination,
    OrganizationCard,
    AisToggleRefinement,
    AisClearRefinements,
    AisCurrentRefinements,
    AisQueryRuleCustomData,
    AwardIcon,
            MapPinIcon,
            CheckCircleIcon,
            LinkIcon,
            ArrowRightCircleIcon,
            SearchIcon,
            UsersIcon,
            CheckIcon,
            ChevronDownIcon,
            ChevronUpIcon,
            MessageSquareIcon,
            XIcon,
            HelpCircleIcon,
            ArrowDownIcon
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css",
        },
      ],
    }
  },
  
  methods: {
    transformItems(items) {
      return items.map((item) => ({
        ...item,
        location: item.location.split(":")[1],
      }))
    },
    transformers(items) {
      return items.map((item) => ({
        ...item,
        label: item.label.split(" ")[0],
        highlighted: item.highlighted.split(" ")[0],
      }))
    },
    transformers2(items) {
      return items.filter(
        (item) =>
          item.label !== "USA United States" && item.label !== "CAN Canada"
      )
    },
    transformers3(items) {
      return items.filter(
        (item) =>
          item.label !== "All Childhood Cancer" &&
          item.label !== "Diagnosis Not Listed"
      )
    },
     scrollToTop() {
         window.scrollTo(0,50);
    },
    // greet: function (event) { 
    //    return visible ;
    // },

  },
}
</script>


<!-- <script src="https://unpkg.com/feather-icons"></script>
<script>
    feather.replace()
</script> -->
<style>
.newfooter {
  background: #2d3748 !important;
  background-color: #2d3748 !important;
}
.t0 {
  font-family: AvenirNextLTW01-Regular, sans-serif;
}

.t1 {
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.t2 {
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.t3 {
  font-family: Avenir Next LT W01 Bold, sans-serif;
}

.t4 {
  font-family: AvenirNextLTW01-Medium, sans-serif;
}

.p {
  font-family: AvenirNextLTW01-Regular, sans-serif;
}

.nav2-link.active {
  color: #1062ed !important;
}

.newtitlecolor {
  color: #1f2430;
}

.newcolor {
  color: #1f2430;
}

.headerheadline {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .bigheadline {
    font-size: 2.5rem;
    color: #1f2430;
    letter-spacing: -0.025em;
  }

  .bannertitle {
    font-size: 2.5rem;
    letter-spacing: -0.025em;
  }
}

h2 {
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

h3 {
  font-family: AvenirNextLTW01-Medium, sans-serif;
}

@media (max-width: 980px) {
  .nav-link.active::after {
    content: none;
  }
}

.alert-info {
  background-color: #e6fffa !important;
  border-color: #b2f5ea !important;
}

.navshad {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.dropdown-item.disabled {
  color: #a0aec0 !important;
}

.newblue {
  color: #275ffb !important;
}

.ais-SearchBox-input {
  font-size: 0.875rem !important;
  color: #4a5568 !important;
  border: none;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

.ais-SearchBox-input::placeholder {
  font-size: 0.875rem;
  color: #1a202c;
}

.ais-Menu-item--selected {
  font-weight: 900;
}

.ais-Menu-label {
  font-size: 12px;
  margin-top: 0.5rem;
  color: #1062ed;
}

.ais-Pagination-link {
  /*font-size: 12px !important;*/
  padding:.75rem 1rem !important;
}

.ais-Pagination-item {
}

.bestknown6 {
  font-size: 10px !important;
}

.ais-CurrentRefinements-label {
  display: none;
  background: #f7fafc;
}

.ais-CurrentRefinements-item {
  background-color: #edf2f7;
  border: 0.5px solid #4a5568 !important;
  border-radius: 9999px;
  font-size: 10px;
  margin: 0.5rem;
}

.tagstyle {
  border: 0.5px solid #275ffb !important;
  color: #275ffb;
}

.tagstyle2:hover {
  background: #275ffb !important;
  color: #fff;
}

.newblue {
  color: #275ffb !important;
}

.ais-CurrentRefinements-list {
  flex-wrap: wrap;
}

.ais-CurrentRefinements-delete {
  color: #2a4365;
  font-size: 0.75rem;
}

.ais-CurrentRefinements-categoryLabel {
  font-size: 0.75rem !important;
  color: #2a4365;
}

.bigtypes {
  font-size: 0.5rem !important;
}

.ais-RefinementList-labelText {
  font-size: 0.875rem;
  line-height: 1.2;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  /*font-family: AvenirNextLTW01-Medium, sans-serif;*/
}

.ais-RefinementList-label {
  display: inline-flex;
}

.ais-RefinementList-item {
  align-items: center;
  font-size: 0.875rem;
  display: inline-flex;
  margin: 0.25rem;
  width: 100%;
}

.ais-RefinementList-item--selected {
  color: #1062ed;
  font-family: AvenirNextLTW01-Medium, sans-serif;
}

.ais-RefinementList-checkbox {
}

.ais-RefinementList-count {
  display: none;
}

.ais-ClearRefinements-button {
  background-color: transparent;
  color: gray;
  text-decoration: underline;
}

.ais-ClearRefinements-button:hover {
  background-color: transparent;
  color: gray;
}

.ais-Menu-count {
  color: #718096;
}

.tags {
  font-size: 0.75rem;
}

.bgcool {
  background: #ebf2fe;
}

.topcat .ais-CurrentRefinements-categoryLabel {
  font-size: 1rem !important;
  color: #2a4365;
  border: none !important;
}

.topcat .ais-CurrentRefinements-item {
  border: none;
  margin: 0;
  padding: 0;
  background: none;
}

.topcat .ais-CurrentRefinements-category {
  margin-left: 0;
}

.ais-HierarchicalMenu-link {
  /*   color:#1062ed;*/
  transition: none;
  margin-bottom: 3px;
  /*font-size:.875rem;*/
  /* color:#4a5568;*/
  color: inherit !important;
}

.ais-HierarchicalMenu-label {
  font-size: 0.875rem !important;
  /*color:#4a5568;*/
}

.ais-HierarchicalMenu-count {
  color: #718096;
  opacity: 0.5;
  background: #edf2f7;
  font-size: 0.75rem;
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.ais-HierarchicalMenu-link:focus {
  color: #1062ed !important;
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.ais-HierarchicalMenu-link:hover {
  color: #1062ed;
}

.ais-HierarchicalMenu-list--child {
  font-family: AvenirNextLTW01-Regular, sans-serif;
  font-size: 0.75rem;
}

.ais-HierarchicalMenu-item--selected .ais-HierarchicalMenu-link {
  color: #1062ed !important;
}

.ais-CurrentRefinements--noRefinement {
  height: 0;
}

.is-active {
  background-color: #000 !important;
}

.selectbutton {
  border: 1px solid #a0aec0 !important;
}

.bg-primary {
  background-color: #1062ed;
}
.bg-primarylight {
  background-color: #f6f9ff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.text-primary {
  color: #1062ed;
}
</style>
