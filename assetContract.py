from boa.interop.Neo.Storage import Get,Put,Delete,GetContext
from boa.interop.Neo.Runtime import Serialize, Deserialize
from boa.blockchain.vm.Neo.Runtime import CheckWitness

def Main(operation, args):
    ctx = GetContext()

    if operation == 'createAsset':
        if len(args) > 3:
            assetId = strVal(args[0])
            senderKey = strVal(args[1])
            receiverKey = strVal(args[2])
            middleManKey = strVal(args[3])
            asset = {
                'senderKey': senderKey,
                'receiverKey': receiverKey,
                'middleManKey': middleManKey,
                'snapshots': []
            }
            serializedAsset = Serialize(asset)
            Put(ctx, assetId, serializedAsset)
            return "Asset created successfully"
        return "Invalid number of args to create an asset"

    elif operation == 'updateAsset':
        if len(args) > 1:
            assetId = strVal(args[0])
            snapshotHash = strVal(args[1])
            asset = Get(ctx, assetId)
            if asset != None and hasUpdatePermissions(asset): 
                asset['snapshots'].append(snapshotHash)
                serializedAsset = Serialize(asset)
                Put(ctx, assetId, serializedAsset)
                return "Asset updated"
            else:
                return "Asset not found"
        return "Invalid number of args to create an asset"
    
    elif operation == 'getAsset':
        if len(args) > 0:
            assetId = strVal(args[0])
            asset = Get(ctx, assetId)
            if asset != None: 
                deserializedAsset = Deserialize(asset)
                return deserializedAsset
            else:
                "Asset not found"
        return "Invalid number of args to get an asset"
 
    return "No valid operation specified"

def strVal(inputArrayElement):
    substr(inputArrayElement, 1, len(inputArrayElement)) # We prefix each variable in input array with : to avoid encoding

def hasUpdatePermissions(asset):
    return CheckWitness(asset.senderKey) or CheckWitness(asset.receiverKey) or CheckWitness(asset.middleManKey)