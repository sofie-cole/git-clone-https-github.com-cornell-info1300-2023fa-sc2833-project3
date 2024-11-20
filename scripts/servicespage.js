// Adjust Appearance of Accordion on Width
function serAdjustWidth() {
    if (window.matchMedia('(max-width: 800px)').matches) {
        if ($(".serButton").hasClass("hidden")) {
            $(".serButton").removeClass("hidden");
            $(".serviceIntro").addClass("hidden");
            $("#serOverview").removeClass("hidden");
            $(".serPlus").removeClass("hidden");
            $(".serMinus").addClass("hidden");
            $("#serSerP").addClass("hidden");
            $("#serSerM").removeClass("hidden");
        }
    } else {
        $(".serButton").addClass("hidden");
        $(".serviceIntro").removeClass("hidden");
    }
}

$(document).ready(serAdjustWidth);
$(window).on('resize', serAdjustWidth);

// Overview Button
$("#serSerButton").click( function() {
    if ($("#serOverview").hasClass("hidden")) {
        $("#serOverview").removeClass("hidden");
        $("#serSerP").addClass("hidden");
        $("#serSerM").removeClass("hidden");
    } else {
        $("#serOverview").addClass("hidden");
        $("#serSerM").addClass("hidden");
        $("#serSerP").removeClass("hidden");
    }
})

// Certified Plot Plans Button
$("#serPlanButton").click( function() {
    if ($("#serPlan").hasClass("hidden")) {
        $("#serPlan").removeClass("hidden");
        $("#serPlanP").addClass("hidden");
        $("#serPlanM").removeClass("hidden");
    } else {
        $("#serPlan").addClass("hidden");
        $("#serPlanM").addClass("hidden");
        $("#serPlanP").removeClass("hidden");
    }
})

// Condominium Plans Button
$("#serCondPlanButton").click( function() {
    if ($("#serCondPlan").hasClass("hidden")) {
        $("#serCondPlan").removeClass("hidden");
        $("#serCondP").addClass("hidden");
        $("#serCondM").removeClass("hidden");
    } else {
        $("#serCondPlan").addClass("hidden");
        $("#serCondM").addClass("hidden");
        $("#serCondP").removeClass("hidden");
    }
})

// Mortgage Plot Plans Button
$("#serMortPlanButton").click( function() {
    if ($("#serMortPlan").hasClass("hidden")) {
        $("#serMortPlan").removeClass("hidden");
        $("#serMortP").addClass("hidden");
        $("#serMortM").removeClass("hidden");
    } else {
        $("#serMortPlan").addClass("hidden");
        $("#serMortM").addClass("hidden");
        $("#serMortP").removeClass("hidden");
    }
})

// Lot Stakeout Button
$("#serLotStakeButton").click( function() {
    if ($("#serLotStake").hasClass("hidden")) {
        $("#serLotStake").removeClass("hidden");
        $("#serStakeP").addClass("hidden");
        $("#serStakeM").removeClass("hidden");
    } else {
        $("#serLotStake").addClass("hidden");
        $("#serStakeM").addClass("hidden");
        $("#serStakeP").removeClass("hidden");
    }
})

// Lot Line Adjustments Button
$("#serLotAdjButton").click( function() {
    if ($("#serLotAdj").hasClass("hidden")) {
        $("#serLotAdj").removeClass("hidden");
        $("#serAdjP").addClass("hidden");
        $("#serAdjM").removeClass("hidden");
    } else {
        $("#serLotAdj").addClass("hidden");
        $("#serAdjM").addClass("hidden");
        $("#serAdjP").removeClass("hidden");
    }
})

// Subdivision Plans Button
$("#serSubPlanButton").click( function() {
    if ($("#serSubPlan").hasClass("hidden")) {
        $("#serSubPlan").removeClass("hidden");
        $("#serSubP").addClass("hidden");
        $("#serSubM").removeClass("hidden");
    } else {
        $("#serSubPlan").addClass("hidden");
        $("#serSubM").addClass("hidden");
        $("#serSubP").removeClass("hidden");
    }
})

// Elevation Certificates Button
$("#serElevationButton").click( function() {
    if ($("#serElevation").hasClass("hidden")) {
        $("#serElevation").removeClass("hidden");
        $("#serEleP").addClass("hidden");
        $("#serEleM").removeClass("hidden");
    } else {
        $("#serElevation").addClass("hidden");
        $("#serEleM").addClass("hidden");
        $("#serEleP").removeClass("hidden");
    }
})

// Land Court Surveys Button
$("#serCourtButton").click( function() {
    if ($("#serCourt").hasClass("hidden")) {
        $("#serCourt").removeClass("hidden");
        $("#serCourtP").addClass("hidden");
        $("#serCourtM").removeClass("hidden");
    } else {
        $("#serCourt").addClass("hidden");
        $("#serCourtM").addClass("hidden");
        $("#serCourtP").removeClass("hidden");
    }
})

// Topographic Surveys Button
$("#serTopoButton").click( function() {
    if ($("#serTopo").hasClass("hidden")) {
        $("#serTopo").removeClass("hidden");
        $("#serTopoP").addClass("hidden");
        $("#serTopoM").removeClass("hidden");
    } else {
        $("#serTopo").addClass("hidden");
        $("#serTopoM").addClass("hidden");
        $("#serTopoP").removeClass("hidden");
    }
})
