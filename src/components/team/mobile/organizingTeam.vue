<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
            <v-flex xs12 sm3 md2 lg2 v-for="(item,i) in TeamData" :key="i" class="px-5 ma-0">
                <TeamDetailsDialog :data="{vdata:item}"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import TeamDetails from '@/assets/data/organizingTeam.json'
import TeamDetailsDialog from '@/components/team/teamDetails'
export default {
    components:{
        TeamDetailsDialog
    },
    data() {
        return {
            TeamDetails: TeamDetails,
            showLoader: true,
            showData:false,
        }
    },
    computed: {
        TeamData: function() {
            function compare(a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }
            return this.TeamDetails.slice().sort(compare);
        }
    }

}
</script>
