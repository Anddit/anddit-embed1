<template>
    <div>
        <a
            :href="'/organizations/' + organization.id"
            target="_blank"
            class="hover:no-underline no-underline">
            <div class="rounded-lg w-full h-full max-w-lg overflow-hidden border border-gray-200 mb-4 hover:shadow-lg mx-auto bg-white">
                <div class="flex-col w-full">
                    <div 
                        v-if="organization.image_path"
                        class="w-full mb-3 border-b border-gray-200">
                        <img
                            :src="organization.image_path"
                            class="mx-auto"
                            style="max-height: 18rem;">
                    </div>
                    <div
                        v-if="organization.location"
                        class="flex flex-row w-full items-start justify-left align-middle mt-4 px-6">
                        <div class="text-gray-500 text-xs items-start tracking-normal align-middle my-auto t2 uppercase">
                            Serves {{organization.location}}
                        </div>
                    </div>
                    <div class="px-6 my-4">
                        <div class="inline-flex items-center justify-between w-full">
                            <a :href="'/organizations/' + organization.id"
                            class="text-gray-800 newtitlecolor hover:underline hover:text-primary text-base align-middle justify-left t3 leading-tight tracking-tight cardtitle">
                                {{ organization.name }}
                            </a>
                            <div class="block justify-right float-right w-1/6 object-contain">
                                <img
                                    v-if="organization.cac2_approved"
                                    src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                                    style="width: 25px !important; height: 25px !important; border-radius: 100%; float:right;">
                            </div>
                        </div>
                        <div class="text-sm tracking-tight leading-tight mt-2 mb-1  text-gray-600 w-full md:w-11/12 t0 ">
                            <div>
                                {{ organization.mission|truncate(150) }}
                            </div>
                        </div>
                        <div
                            v-if="organization.known_for"
                            class="flex inline-flex items-center mb-2 w-full md:w-11/12 text-sm mt-3">
                            <div
                                class="rounded-full  py-2 px-2 mr-3 border-none"
                                style="background:#ebf2fe;">
                                <AwardIcon class="h-4 w-auto  align-left text-xs "/>
                            </div>
                            <div class="highlightstyle text- no-underline leading-tight tracking-tight mt-1 t4 text-primary text-sm">
                                {{ organization.known_for|truncate(110) }}
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    import {
        AwardIcon,
    } from 'vue-feather-icons';

    export default {
        name: "organization-card",

        components: {
            AwardIcon,
        },

        props: {
            organization: {
                required: true,
                type: Object,
            },
        },

        filters: {
            truncate: function(value, limit) {
                if (!value) return '';
                else if (value.length > limit) {
                    value = value.substring(0, (limit - 3)) + '...';
                }
                return value;
            }
        },
    }
</script>