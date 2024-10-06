

describe('cadastro de email', () => {
 
    beforeEach(() => {
      // reset and seed the database prior to every test
      cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')        
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get("[data-v-10d463b7='']").click()
    })
  
   it.skip('Redirect Tests', () => {
    //admin    
    cy.get("[href='/web/index.php/admin/viewAdminModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

    //pin
    cy.get("[href='/web/index.php/pim/viewPimModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    //leave
    cy.get("[href='/web/index.php/leave/viewLeaveModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')

    //recruitment
    cy.get("[href='/web/index.php/recruitment/viewRecruitmentModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    
    //myinfo
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7')

    //performance
    cy.get("[href='/web/index.php/performance/viewPerformanceModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')

    //Dashboard
    cy.get("[href='/web/index.php/dashboard/index']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    //Directory
    cy.get("[href='/web/index.php/directory/viewDirectory']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')

    //Maintenace
    cy.get("[href='/web/index.php/maintenance/viewMaintenanceModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
    cy.get('.oxd-button--ghost').click()


    //claim
    cy.get("[href='/web/index.php/claim/viewClaimModule']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim')
   
    //buzz
    cy.get("[href='/web/index.php/buzz/viewBuzz']").click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')

    

  })


  it.only('Admin Fuction - Add User', () => {    
    cy.get("[href='/admin/viewAdminModule']").click() 
    cy.get(".oxd-button--secondary[type='button']").click()
    cy.get("[data-v-13cf171c=''][data-v-67d2aedf='']").eq(0).click()
    cy.get("[role='listbox'] [data-v-d130bb63='']").eq(1).click()
    cy.get("[placeholder='Type for hints...']").type("Lindsay Joanne Nicolas Anderson")
    //wait xhr response
    cy.intercept({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/api/v2/pim/employees?nameOrId=Lindsay+Joanne+Nicolas+Anderson",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst");
    cy.get("[data-v-da59eaf4='']").click()    
    cy.get("[data-v-13cf171c=''][data-v-67d2aedf='']").eq(1).click()
    cy.get("[role='listbox'] [data-v-d130bb63='']").eq(1).click()
    cy.get("[autocomplete='off'][data-v-1f99f73c='']").eq(0).type("testUser")
    cy.get("[type='password']").eq(0).type('3141597r')
    cy.get("[type='password']").eq(1).type('3141597r')
    cy.get(".oxd-button--secondary").click()
  })

  it('Admin Fuction - Search User', () => {
    cy.get("[href='/admin/viewAdminModule']").click()    
    //search
    cy.get("[data-v-957b4417=''] [data-v-1f99f73c='']").type('AdminTest')
    cy.get(".oxd-select-text--active[data-v-67d2aedf='']").eq(0).click()
    cy.get("[role='listbox']").click()
    cy.get("[placeholder='Type for hints...']").type('1demo 3sample')
    cy.get(".oxd-select-text--active[data-v-67d2aedf='']").eq(1).click()
    cy.get("[role='listbox']").click()
    
  })




})