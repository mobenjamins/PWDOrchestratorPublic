import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hostEntityForm: {
      id: 1,
      title: "Host Entity Information",
      isActive: true,
      isCompleted: false,
      identityOfHostCompany: {
        country: "",
        intraCommunityVATNumber: "",
        corporateName: "",
        address: "",
        city: "",
        postCode: "",
        email: "",
        addressline2: ""
      },
      representativeInHostCountry:{
        dutiesOFrepresentative: "",
        siret: "",
        corporateName: "",
        address: "",
        city: "",
        postCode: "",
        addressline2: "",
      },
      meansOfContact:{
        email: "",
        phone: "",
      },
      storeOfDocuments:{
        location: "",
      },
      datesAndPlace:{
        serviceStartDate: "",
        serviceEndDate: "",
        siren: "",
        siret: "",
        corporateName: "",
        address: "",
        city: "",
        postCode: "",
        addressline2: "",
        nafCode: "",
        collectiveAccomodation: "",
        addressType: "",
      },
      infoAboutService:{
        mainActivity: "",
        useOfHazardousProcess: "",
        hazardousProcess: "",
        workStartTime: "",
        workEndTime: "",
        restDays: "",
        otherWorkArrangements: null,
      }
    }
};

export const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    updateHostEntityForm: (state, action) => {
      state.hostEntityForm = action.payload;
    },
  },
});

export const { updateHostEntityForm } = formsSlice.actions;

export default formsSlice.reducer;
