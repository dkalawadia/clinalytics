/**
 * Created by Dinesh Kalawadia <http://github.com/dkalawadia> on 10/14/2014.
 */

var mongoose        = require('mongoose')
    ,db             = mongoose.createConnection(Process.env.DEVELOPMENT)
    ,Schema         = mongoose.Schema
    ,ObjectId       = Schema.ObjectId;

var ClinicalTrialsModel = function() {


    var group_master = new Schema({
        id: String,
        nctid: String,
        org_study_id: String,
        group_id: String,
        title: String,
        description: String,
        ext_id: String
    });

    var measurement = new Schema({
        id: String,
        nctid: String,
        category_id: String,
        group_id: String,
        lower_limit: String,
        value: String,
        spread: String,
        upper_limit: String
    });

    var clinical_study = new Schema({
        org_study_id: String,
        secondary_id: String,
        nctid: String,
        brief_title: String,
        official_title: String,
        source: String,
        status: String,
        study_design: String,
        study_type: String,
        condition_id: String,
        number_of_arms: Number,
        phase: String,
        is_fda_regulated: String,
        is_section_801: String,
        has_expanded: String
    });

    var conditions = new Schema({
        id: String,
        condition: String
    });

    var measure = new Schema({
        id: String,
        nctid: String,
        dispersion: string,
        param: string,
        title: String,
        description: String,
        units: String,
        ext_id: String
    });

    var category = new Schema({
        id: String,
        nctid: String,
        measure_id: String,
        sub_title: String
    });

    var arm_group= new Schema({
        org_study_id: String,
        arm_group_label: String,
        arm_group_type: String,
        description: String
    });

    var topics = new Schema({
        org_study_id: String,
        topic: String,
        type: String,
        text: String
    });

    var intervention = new Schema({
        org_study_id: String,
        id: String,
        name: String,
        type: String,
        description: String
    });

    var other_interventions = new Schema({
        intervention_id: String,
        name: String
    });

    var arm_group_label = new Schema({
        intervention_id: String,
        group_label: String
    });

    var criteria = new Schema({
        org_study_id: String,
        gender: String,
        minimum_age: String,
        maximum_age: String,
        volunteer: String,
        criteria_text: String
    });

    var mesh_terms = new Schema({
        org_study_id: String,
        mesh_term: String
    });

    var participant_flow = new Schema({
        org_study_id: String,
        id: String,
        pre_assignment_details: String,
        recruitment_details: String
    });

    var period = new Schema({
        org_study_id: String,
        id: String,
        title: String
    });

    var milestones = new Schema({
        period_id: String,
        id: String,
        title: String
    });

    var withdraw = new Schema({
        period_id: String,
        id: String,
        title: String
    });

    var participants = new Schema({
        milestone_id: String,
        group_id: String,
        value: String
    })

    var outcome = new Schema({
        org_study_id: String,
        id: String,
        type: String,
        title: String,
        description: String,
        timeframe: String,
        safety_issues: String,
        population: String,
        posting_date: String
    });

    var reported_events = new Schema({
        org_study_id: String,
        id: String,
        time_frame: String
    });

    var events = new Schema({
        reported_event_id: string,
        id: String,
        frequency_threshold: string,
        default_vocab: String,
        default_assesment: string,
        event_type: String
    });

    var event_category = new Schema({
        event_id: String,
        id: String,
        title: String
    });

    var actual_events = new Schema({
        category_id: String,
        id: String,
        assesment: String,
        description: string,
        sub_title: String
    })

    var counts = new Schema({
        actual_event_id: String,
        id: String,
        group_id: String,
        value: String,
        subjects_affected: String,
        subjects_at_risk: String
    })

}

