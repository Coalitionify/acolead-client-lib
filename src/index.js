// src/index.js
import axios from "axios";

function getApiUrl(clientId) {
  const isStage = __IS_STAGE__;
  const baseUrl = isStage
    ? 'https://api.stage.coalitionify.com'
    : 'https://api.acolead.com';
  return `${baseUrl}/crm-backend/api/v1/cp/${clientId}/capture-lead`;
}

function sendLead(clientId, payload) {
  return axios.post(getApiUrl(clientId), payload);
}

const AcoLead = {
  async submitEnquiry(
    clientId,
    name,
    mobileNumber,
    requirement,
    email,
    company
  ) {
    try {
      const result = await sendLead(clientId, {
        name,
        mobileNumber,
        requirement,
        email,
        company,
        type: "ENQUIRY",
      });
      return result.data;
    } catch (error) {
      console.error("AcoLead Enquiry Submission Failed:", error);
      return error;
    }
  },

  async submitVisitSchedule(
    clientId,
    name,
    number,
    emailId,
    inventoryId,
    message
  ) {
    try {
      await sendLead(clientId, {
        name,
        number,
        emailId,
        inventoryId,
        message,
        type: "VISIT",
      });
    } catch (error) {
      console.error("AcoLead Visit Schedule Submission Failed:", error);
    }
  },
};

window.AcoLead = AcoLead;
