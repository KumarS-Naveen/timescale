"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionResult;
(function (TransactionResult) {
    TransactionResult["NoError"] = "NoError";
    TransactionResult["EmergencyStop"] = "EmergencyStop";
    TransactionResult["VehicleStoped"] = "VehicleStoped";
    TransactionResult["Reboot"] = "Reboot";
    TransactionResult["ChargingStationStoped"] = "ChargingStationStoped";
    TransactionResult["Other"] = "Other";
})(TransactionResult || (TransactionResult = {}));
exports.TransactionResult = TransactionResult;
var TransactionRequestModel = /** @class */ (function () {
    function TransactionRequestModel(ChargerID, ConnectorID, StartAt, EndAt, InitialSoC, EndSoC, EnergyDelivered, EndResult, ExtraInfo) {
        // Examples of ExtraInfo: RemoteTransaction(true/false), VehicleID, InitiatorID (AuthorizationMean)
        this.ExtraInfo = new Map();
        this.ChargerID = ChargerID;
        this.ConnectorID = ConnectorID;
        this.StartAt = StartAt;
        this.EndAt = EndAt;
        this.InitialSoC = InitialSoC;
        this.EndSoC = EndSoC;
        this.EnergyDelivered = EnergyDelivered;
        this.ExtraInfo = ExtraInfo;
        if (EndResult != undefined) {
            console.log(EndResult);
            try {
                this.EndResult = TransactionResult[EndResult];
                if (!this.EndResult) {
                    this.EndResult = TransactionResult.Other;
                }
            }
            catch (error) {
                this.EndResult = TransactionResult.Other;
            }
        }
        else {
            this.EndResult = TransactionResult.Other;
        }
    }
    return TransactionRequestModel;
}());
exports.default = TransactionRequestModel;
//# sourceMappingURL=TransactionRequestModel.js.map