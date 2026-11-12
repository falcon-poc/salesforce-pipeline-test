import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class CreateOpportunityButton extends NavigationMixin(
  LightningElement
) {
  handleClick() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Opportunity",
        actionName: "new"
      }
    });
  }
}
