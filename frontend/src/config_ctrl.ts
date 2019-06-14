export class AwsAthenaDatasourceConfigCtrl {
    static templateUrl = 'partials/config.html'
    current: any
    accessKeyExist: any
    secretKeyExist: any
    sessionTokenExist: any
    datasourceSrv: any
    authTypes: any

    /** @ngInject */
    constructor($scope: any, datasourceSrv: any) {
        this.current.jsonData.authType = this.current.jsonData.authType || 'credentials'

        this.accessKeyExist = this.current.secureJsonFields.accessKey
        this.secretKeyExist = this.current.secureJsonFields.secretKey
        this.sessionTokenExist = this.current.secureJsonFields.sessionToken
        this.datasourceSrv = datasourceSrv
        this.authTypes = [
            { name: 'Access & secret key', value: 'keys' },
            { name: 'Credentials file', value: 'credentials' },
            { name: 'ARN', value: 'arn' },
        ]
    }

    resetAccessKey() {
        this.accessKeyExist = false
    }

    resetSecretKey() {
        this.secretKeyExist = false
    }
}
