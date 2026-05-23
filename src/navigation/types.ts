export type RootStackParamList = {
  Login: undefined;
  Home: {
    workerName?: string;
  } | undefined;
  Step1_ClientData: {
    workerName: string;
  };
  Step2_TaxDetails: {
    workerName: string;
    clientRuc: string;
    clientName: string;
    grossAmount: number;
  };
  Summary: {
    workerName: string;
    clientRuc: string;
    clientName: string;
    grossAmount: number;
    paymentMethod: "contado" | "credito";
    retentionEnabled: boolean;
  };
  Success: {
    workerName: string;
    receiptNumber: string;
    clientName: string;
    totalAmount: number;
  };
};