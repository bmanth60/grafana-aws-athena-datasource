import { QueryCtrl } from 'grafana/app/plugins/sdk'

export class AwsAthenaDatasourceQueryCtrl extends QueryCtrl {
    static templateUrl = 'partials/query.editor.html'
    scope: any
    target: any
    panelCtrl: any

    constructor($scope: any, $injector: any) {
        super($scope, $injector)

        this.scope = $scope
        this.target.format = this.target.format || this.target.type || 'timeseries'
        this.target.region = this.target.region || ''
        this.target.timestampColumn = this.target.timestampColumn || ''
        this.target.valueColumn = this.target.valueColumn || ''
        this.target.legendFormat = this.target.legendFormat || ''
        this.target.queryExecutionId = this.target.queryExecutionId || ''
    }

    onChangeInternal() {
        this.panelCtrl.refresh()
    }
}
