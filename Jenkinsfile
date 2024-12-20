#!/usr/bin/groovy
// @Library('jenkins-library@v1.1.0')

import static com.pelmorex.build.Platforms.NODEJS

Map configuration = [
        platform                    :   NODEJS,
        team                        :   'naads',
        product                     :   'alert-manager-ui',
        testTimeout                 :    3000,
        deploymentArtifactRepoUrl   :   'https://bitbucket.org/pelmnaads/deployment-artifacts.git',
        buildStatusNotification : [
            googleChatWebhook: "https://chat.googleapis.com/v1/spaces/AAAAxHiIacY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=kUp-jR7T1lsbDE2rpvmbTM0on-4Q4QcMaeg_ZbPS5lQ%3D"
        ],
        unitTests   : [
            enabled: false,
            junitReportPath: 'junit.xml',
            appDirectory: './app',
            command: './scripts/test.sh'
        ],
        codeAnalysis: [
            enabled: false,
        ],
        buildAndPublish : [
            enabled: true,
            commands: [
                [
                        name     : 'Application',
                        command  : './scripts/build.sh',
                        imagePath: 'naads/alert-manager-ui'
                ],
            ],        
            publishHelmCharts: true,
        ]
]

pipe(configuration){}