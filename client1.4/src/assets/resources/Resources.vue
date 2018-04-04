<template>
  <div>
    <div class="container text-center">
      <span class="date text-center"><h4 class="dates">Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
      <h2>Covenants/By-Laws/Rules:</h2>
      <img src="../photos/arrow17.png" width="600" alt="">
    </div>

    <nav class="navbar text-center">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <router-link to="/Home/Resources/Rules" tag="li"><a>Rules</a></router-link>
          <router-link to="/Home/Resources/ByLaws" tag="li"><a>By-Laws</a></router-link>
        </ul>
      </div>
    </nav>

    <div class="container link">

      <div class="table-responsive">
        <table class="table">
          <tr>
            <td width="600" colspan="4" align="center"><h2>Protective and Restrictive Covenants<br /><br />
              of the<br /><br>
              Sunridge Property Owner's Association</h2></td>
          </tr>
          <tr>
            <td width="600" colspan="4" align="center">Adopted: October 21, 2003<br />
              <a href="http://sunridge.info/docs/Sunridge_Covenants_Amendments_2009.pdf" target="_blank">Amendments Adopted June 02, 2009</a></td>
          </tr>
          <tr>
            <td width="600" colspan="4" align="center"><h3>Table of Contents<br />
            </h3>
            </td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov1" active-class="active"><a>Recital</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">. . . . . . . . . . . . . . . . . . . . . . . .</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov1" active-class="active"><a>1</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"> <router-link to="/Home/Resources/Cov2"><a>Article I</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Definitions </td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov2"><a>2</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov3"><a>ARTICLE II</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Property Description</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov3"><a>3</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4"><img src="../photos/spacer.gif" height="5"></td>
          </tr>

          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov3"><a>ARTICLE III</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Association Membersip and Voting</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov3"><a>3</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov3"><a>3.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Membership</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov3"><a>3</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov3"><a>3.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Lot Ownership</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov3"><a>3</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov3"><a>3.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Voting Rights</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov3"><a>3</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov4"><a>ARTICLE IV</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Powers of the Board</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov4"><a>4</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov4"><a>4.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Elected Board of Trustees</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov4"><a>4</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov4"><a>4.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Board Authority</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov4"><a>4</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov4"><a>4.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Notice to Owners</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov5"><a>5</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov5"><a>4.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Violations</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov5"><a>5</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4"><img src="../photos/spacer.gif" height="5"></td>
          </tr>

          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov5"><a>ARTICLE V</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Development and Maintenance of Lots</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov5"><a>5</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov5"><a>5.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Subdivision Prohibited</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov5"><a>5</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov6"><a>5.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Identification of Lots</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov6"><a>6</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov6"><a>5.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Single Family Residences</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov6"><a>6</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov6"><a>5.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Approval to Develop</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov6"><a>6</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov6"><a>5.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">County/State/Federal Regulations</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov6"><a>6</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov6"><a>5.06</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Building Standards and Specifications</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov6"><a>6</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.07</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Setback Requirements</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.08</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Sheds</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.09</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Timely Response from Association</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.10</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Timely Completion of Structures</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.11</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Excavations</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov7"><a>5.12</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Sewage Disposal</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov7"><a>7</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>5.13</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Owner Maintenance of Lots</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>5.14</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Trash</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>5.15</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Development Closed</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" align="center"><img src="../photos/spacer.gif"height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>ARTICLE VI</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">User Protections and Restrictions</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>6.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Commercial Prohibited</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>6.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Signs</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov8"><a>6.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Animals</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov8"><a>8</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov9"><a>6.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Fires</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov9"><a>9</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov9"><a>6.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Nuisances and Offensive Activities</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov9"><a>9</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov9"><a>6.06</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Quiet Hours</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov9"><a>9</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>6.07</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Operation of Vehicles</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>6.08</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Shooting and Hunting</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" align="center"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>ARTICLE VII</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Common Areas and Easements</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>7.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Owner Easements</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>7.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Delegation of Rights</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>7.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Utilities Easements</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov10"><a>7.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Operation and Maintenance of Commons by Association</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov10"><a>10</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov11"><a>7.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Damage to Common Area by Owner</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov11"><a>11</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov11"><a>7.06</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Vista Property</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov11"><a>11</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" align="center"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov11"><a>ARTICLE VIII</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Assessments and Expenditures</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov11"><a>11</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov11"><a>8.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Covenant to Pay Assessments</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov11"><a>11</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov12"><a>8.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Purpose for Assessments</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov12"><a>12</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>8.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Late Fees</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>8.06</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Extension of Deadline</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>8.07</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Special Assessments for Catastrophic Damage or Repairs</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>8.08</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Lien for Overdue Assessments</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>8.09</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Liability of Purchaser</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" align="center"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>ARTICLE IX</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Association Insurance and Taxes</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov13"><a>9.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Public Liability Insurance</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov13"><a>13</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>9.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Officers and Directors Liability Insurance</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>9.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Fidelity Insurance or Bond</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>9.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Additional Insurance</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>9.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Taxes and Assessments on Common Areas</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" align="center"><img src="../photos/spacer.gif" height="5"></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>ARTICLE X</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">General Provisions</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>10.01</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Subordination of Liens to Mortgages</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>10.02</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Interpretation</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov14"><a>10.03</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Compliance and Enforcement</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov14"><a>14</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov15"><a>10.04</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Registration of Mailing Address</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov15"><a>10.05</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Amendment to Covenants</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov15"><a>10.06</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Covenants to Run with Land</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov15"><a>10.07</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">No Liability for Damages</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td width="25%" align="right"><router-link to="/Home/Resources/Cov15"><a>10.08</a></router-link></td>
            <td width="5%"><img src="../photos/spacer.gif"></td>
            <td width="60%" align="left">Effective Date</td>
            <td width="10%" align="left"><router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" height="10" bgcolor="#E6E6E6"><img src="../photos/spacer.gif"></td>
          </tr>
          <tr>
            <td colspan="4" align="center" class="remove">
              <router-link to="/Home/Resources/Cov1" active-class="active"><a>1</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov2"><a>2</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov3"><a>3</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov4"><a>4</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov5"><a>5</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov6"><a>6</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov7"><a>7</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov8"><a>8</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov9"><a>9</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov10"><a>10</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov11"><a>11</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov12"><a>12</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov13"><a>13</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov14"><a>14</a></router-link>&nbsp;&nbsp;
              <router-link to="/Home/Resources/Cov15"><a>15</a></router-link></td>
          </tr>
          <tr>
            <td colspan="4" class="remove"><a href="#top">Go to top of page</a></td>
          </tr>


        </table>
      </div>

    </div>


  </div>
</template>
