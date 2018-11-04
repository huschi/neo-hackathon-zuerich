from boa.interop.Neo.Storage import Get,Put,Delete,GetContext
from boa.interop.Neo.Runtime import Serialize, Deserialize

def Main(operation, args):
    ctx = GetContext()

    if operation == 'createOrder':
        if len(args) > 2:
            orderId = strVal(args[0])
            senderKey = strVal(args[1])
            receiverKey = strVal(args[2])
            order = {
                'senderKey': senderKey,
                'receiverKey': receiverKey,
                'snapshots': []
            }
            serializedOrder = Serialize(order)
            Put(ctx, orderId, serializedOrder)
            return "Order created successfully"
        return "Invalid number of args to create an order"

    elif operation == 'updateOrder':
        if len(args) > 1:
            orderId = strVal(args[0])
            snapshotHash = strVal(args[1])
            order = Get(ctx, orderId)
            if order != None: 
                order['snapshots'].append(snapshotHash)
                serializedOrder = Serialize(order)
                Put(ctx, orderId, serializedOrder)
                return "Order updated"
            else:
                return "Order not found"
        return "Invalid number of args to create an order"
    
    elif operation == 'getOrder':
        if len(args) > 0:
            orderId = strVal(args[0])
            order = Get(ctx, orderId)
            if order != None: 
                deserializedOrder = Deserialize(order)
                return deserializedOrder
            else:
                "Order not found"
        return "Invalid number of args to get an order"
 
    return "No valid operation specified"

def strVal(inputArrayElement):
    substr(inputArrayElement, 1, len(inputArrayElement)) # We prefix each variable in input array with : to avoid encoding