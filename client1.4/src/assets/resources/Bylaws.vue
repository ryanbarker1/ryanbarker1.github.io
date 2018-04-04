<template>
  <div>
    <div class="container text-center">
      <span class="date text-center"><h4 class="dates">Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
      <h2>By-Laws</h2>
      of the
      <h2>Sunridge Property Owners Association</h2>
      <img src="../photos/arrow17.png" width="600" alt="">
    </div>
    <nav class="navbar text-center">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <router-link to="/Home/Resources" tag="li"><a>Back</a></router-link>
        </ul>
      </div>
    </nav>

    <table class="table link">
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"height="10"></td>
      </tr>
      <tr>
        <td width="600" height="41" align="center" colspan="4">Ratified by SPOA Board of Trustees<br />
          August 10, 1998</td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="5"></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><strong>Table of Contents</strong></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right"> <router-link to= '/Home/Resources/ByLaws/ByLaws1'><a>ARTICLE I</a></router-link> </td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">NAME AND LOCATION</td>
        <td width="10%" align="left"><router-link to= '/Home/Resources/ByLaws/ByLaws1'><a>1</a></router-link> </td>
      </tr>
      <tr>
        <td width="25%" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws1'><a>ARTICLE II</a></router-link> </td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">DEFINITIONS</td>
        <td width="10%" align="left"><router-link to= '/Home/Resources/ByLaws/ByLaws1'><a>1</a></router-link> </td>
      </tr>
      <tr>
        <td width="25%" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>ARTICLE III</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">MEETINGS OF MEMBERS</td>
        <td width="10%" align="left"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ELIGIBILITY OF MEMBERS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ANNUAL MEETINGS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>Section 3</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">SPECIAL MEETINGS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>Section 4</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">NOTICE OF MEETINGS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>Section 5</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">QUORUM</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws2'><a>2</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>ARTICLE IV</a></router-link> </td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">SELECTION AND TERM OF OFFICE OF THE BOARD OF TRUSTEES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">NUMBER</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">TERM OF OFFICE</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 3</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">REMOVAL</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 4</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">COMPENSATION</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 5</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ACTION TAKEN WITHOUT A MEETING</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>ARTICLE V</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">NOMINATION AND ELECTION OF TRUSTEES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">NOMINATION</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws3'><a>3</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"> <router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ELECTION</td>
        <td> <router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>ARTICLE VI</a></router-link> </td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">MEETINGS OF TRUSTEES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">REGULAR MEETINGS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">SPECIAL MEETINGS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>Section 3</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">QUORUM AND VOTING</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>ARTICLE VII</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">POWERS AND DUTIES OF THE BOARD OF TRUSTEES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif"width="20">POWERS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws4'><a>4</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif"width="20">DUTIES</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>ARTICLE VIII</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">OFFICERS AND THEIR DUTIES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 1</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ENUMERATION OF OFFICES</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">ELECTION OF OFFICERS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 3</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">TERM</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 4</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">SPECIAL APPOINTMENTS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 5</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">RESIGNATION AND REMOVAL</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 6</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">VACANCIES</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 7</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">MULTIPLE OFFICES</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>Section 8</a></router-link></td>
        <td><img src="../photos/spacer.gif" width="20">DUTIES</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws5'><a>5</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE IX</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">COMMITTEES</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE X</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">BOOKS AND RECORDS</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE XI</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">ASSESSMENTS</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif" height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE XII</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif"></td>
        <td width="60%" align="left">AMENDMENTS</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"  height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE XIII</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif" ></td>
        <td width="60%" align="left">FISCAL YEAR</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td width="600" align="center" colspan="4"><img src="../photos/spacer.gif"  height="15"></td>
      </tr>
      <tr>
        <td width="25%" align="right" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>ARTICLE XIV</a></router-link></td>
        <td width="5%"><img src="../photos/spacer.gif" ></td>
        <td width="60%" align="left">INSURANCE AND INDEMNIFICATION</td>
        <td width="10%" align="left" valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right" valign="top">v<router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>Section 1</a></router-link></td>
        <td valign="top"><img src="../photos/spacer.gif" width="20" height="5">INSURANCE AGAINST LIABILITY ASSERTED<br />
          <img src="../photos/spacer.gif"  width="20" height="5">AGAINST TRUSTEES AND OFFICERS</td>
        <td valign="top"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr>
        <td colspan="2" align="right"><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>Section 2</a></router-link></td>
        <td><img src="../photos/spacer.gif"  width="20">INDEMNIFICATION OF TRUSTEES AND OFFICERS</td>
        <td><router-link to= '/Home/Resources/ByLaws/ByLaws6'><a>6</a></router-link></td>
      </tr>
      <tr bgcolor="#E5E5E5">
        <td colspan="4" align="center" valign="top">SPOA By-Laws: Table of Contents</td>
      </tr>
    </table>

  </div>
</template>
