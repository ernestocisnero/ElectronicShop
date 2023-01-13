import { collection, query, getDocs, where } from "firebase/firestore";
import { firestoreCartDB } from "../configFirebase";


export const readProductsDB = async (filter: string | undefined) => {

    console.log(filter);

    switch (filter) {
        case 'None':
            const q = query(collection(firestoreCartDB, "shop-products"));
            const querySnapshot = await getDocs(q);
        return querySnapshot.docs;

        case 'PLC':
            const qPLC = query(collection(firestoreCartDB, "shop-products"), where("category", "==", filter));
            const querySnapshotPLC = await getDocs(qPLC);
        return querySnapshotPLC.docs;
        
        case 'Sensor':
            const qSensor = query(collection(firestoreCartDB, "shop-products"), where("category", "==", filter));
            const querySnapshotSensor = await getDocs(qSensor);
        return querySnapshotSensor.docs;

        case 'Development Board':
            const qDevBoard = query(collection(firestoreCartDB, "shop-products"), where("category", "==", filter));
            const querySnapshotDevBoard = await getDocs(qDevBoard);
        return querySnapshotDevBoard.docs;

        default:
            break;
    }


}