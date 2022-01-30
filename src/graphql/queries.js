import {gql} from "@apollo/client";

export const LOAD_USERS = gql`
    query {
        launchesPast(limit: 10) {
            mission_name
            links {
                flickr_images
                article_link
            }
            rocket {
                rocket_name
                first_stage {
                    cores {
                        flight
                    }
                }
                second_stage {
                    payloads {
                        payload_type
                        payload_mass_kg
                    }
                }
            }
            details
            id
            launch_date_local
        }
}
`
