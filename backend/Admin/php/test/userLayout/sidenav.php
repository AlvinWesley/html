<div class="iq-sidebar  sidebar-default ">
          <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
              <a href="Admin-dashboard.html" class="header-logo">
                  <img src="/BUNGOARCH/html/assets/images/logo/logo.png" class="img-fluid rounded-normal light-logo" alt="logo">
                  <img src="/BUNGOARCH/html/assets/images/logo/logo.png" class="img-fluid rounded-normal darkmode-logo" alt="logo">
              </a>
              <div class="iq-menu-bt-sidebar">
                  <i class="las la-bars wrapper-menu"></i>
              </div>
          </div>
          <div class="data-scrollbar" data-scroll="1">
              <div class="new-create select-dropdown input-prepend input-append">
                  <div class="btn-group">
                      <div data-toggle="dropdown">
                      <div class="search-query selet-caption"><i class="las la-plus pr-2"></i>Create New</div><span class="search-replace"></span>
                      <span class="caret"><!--icon--></span>
                      </div>
                      <ul class="dropdown-menu">
                          <li class="upload-file-upf"><div class="item"><i class="ri-folder-add-line pr-3 "></i>Upload Files</div></li>
                          <li class="nfd-ct"><div class="item"><i class="ri-file-upload-line pr-3"></i>New Folder</div></li>
                          <li class="nfl-ct"><div class="item"><i class="ri-folder-upload-line pr-3"></i>Share File</div></li>
                      </ul>
                        <dialog id="d-mdl-fu" class="file-uploader" >
        
        <div class="uploader-header">
            <h2 class="uploader-title">File Upload</h2>
            <h4 class="file-completed-status"></h4>
        
        </div>
         <div class="file-upload-box">
            <h2 class="box-title">
                <span class="file-instruction">Drag files here or</span>
                 <span class="file-browse-button">Browse</span>
            </h2>
            <input class="file-browse-input" type="file" multiple hidden >
        </div>
        <ul class="file-list">
           
        </ul>
       
        <div class="operations">
             <button id="add_file">Add File</button>
                <button id="sbmt_file">Upload Files</button> 
                 <button id="clr">Clear</button>
                <button id="cancel">Exit</button>
        </div>
                        </dialog>
                        <dialog id="d-mdl-flda" class="folder-card">
    <h2>Add Folder</h2>
    <div id="message-box"></div>
    <div class="inputGroup">
    <input type="text" id="folderName" placeholder="Enter Folder Name">
        <div class="form-group-color">
            <label for="folderColor">Choose Folder Color:</label>
            <input type="color" id="folderColor" value="#ffcc00">
        </div>
    </div>
    <div class="buttons">
        <button id="addButton">Add</button>
        <button id="fld-add-cancl-Btn">Cancel</button>
    </div>
                        </dialog>
                        <dialog id="d-mdl-fldV" class="folder_view">
                            <h2>Files in Folder</h2>
                        <div class="file-viewer-list">
                            
                                    <div class="file-table">
                                        <div class="file-row file-header">
                                            <div class="file-icon">Icon</div>
                                            <div class="file-name">File Name</div>
                                            <div class="file-date">Date Created</div>
                                            <div class="file-size">Size</div>
                                            <div class="file-uploaded-by">Uploaded By</div>
                                            <div class="file-actions">Actions</div>
                                        </div>
                                        <div class="file-row-disp">
                            
                                        </div>
                        </div>
                        </div>
                                <div class="dialog-footer">
                                    <button id="closeDialog">Close</button>
                                </div>
                        
                        </dialog>
                        <dialog class="flShrDiag" id="d-mdl-flShr">
                            <!--The select users dialog Starts here guys-->
                            <dialog class="filesSharedPromt"></dialog>
                            <dialog class="selectorDialog userDialog">
                                <!-- Close Button -->
                                <button class="closeBtn" id="cls_usr_dg">&times;</button>

                                <div class="mainContent">
                                    <h1>Select Users</h1>
                                    <div class="selectedCount" id="selectedCount">0 users selected</div>
                                    <!-- Search Bar -->
                                    <div class="userOptions" 
                                    >
                                        <input type="text" id="userSearch" placeholder="Search Users...">
                                        <select name="select" id="filterUsers" style="
                                                        outline:none;
                                                        border: none;
                                                        border-radius:10px;
                                                        padding: 5px;
                                                        width: 50%;
                                                                    ">
                                            <option value="nan">All Users</option>
                                            <option value="us_01">Users</option>
                                            <option value="sp_01">Supervisor</option>
                                            <option value="Adm_01">Admin</option>
                                        </select>
                                    </div>

                                    <!-- 'User not found' message -->
                                    <div class="userNotFound" id="userNotFound">No users found.</div>

                                    <!-- Selected users count -->
                                    

                                    <!-- List of users (Scrollable) -->
                                    <div class="userList" id="userList">
                                    </div>

                                    <!-- Bottom Actions: Select All and Clear Buttons -->
                                    <div class="actionButtons">
                                        <button class="choose" id="users_chosen">Select</button>
                                        <button class="selectAllBtn">Select All</button>
                                        <button class="clearBtn">Clear</button>
                                    </div>
                                </div>
                            </dialog>
                            <!-- The Share files Dialog Shows itself here -->
                            <dialog class="selectorDialog fileDialog">
                                <!-- Close Button -->
                                <button class="closeBtn" id="cls_fl_dg">&times;</button>

                                <div class="mainContent">
                                    <h1>Share Files</h1>
                                    <div class="fileSummary">
                                        <h2 id="fileCount">0 Files Selected</h2>
                                        <h3 id="fileSize">Total Size: 0GB</h3>
                                    </div>

                                    <div class="fileOptions">
                                        <input type="text" id="searchInput" placeholder="Search Files...">
                                        <div class="sortFiles">
                                            <label for="sort">Sort By:</label>
                                            <select id="sort">
                                                <option value="date">Date</option>
                                                <option value="A-Z">A-Z</option>
                                                <option value="Z-A">Z-A</option>
                                                <option value="size">Size</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!-- List of files (Scrollable) -->
                                    <div class="fileList" id="fl_lst">
                                    

                                        <!-- More files... -->
                                    </div>

                                    <!-- Bottom Actions: Select All and Clear Buttons -->
                                    <div class="actionButtons">
                                        <button class="choose" id="files_chosen">Select</button>
                                        <button class="selectAllBtn" id="selectAllBtn">Select All</button>
                                        <button class="clearBtn" id="clearBtn">Clear</button>
                                    </div>

                                </div>
                            </dialog>

                            <div class="text_Box" style="color:#ffffff">
                                </div>
                            <div class="shareFilesBox">
                                <h2>Share Your Files to users</h2>
                                
                                <div class="thisContainer">
                                    <div>
                                    <h4 id="fl_cnt">Files To Share(0)</h4>
                                    </div>
                                    <div class="file_box">
                                        
                                    </div>
                                    <div class="addBox">
                                        <button id="add_file_btn">Add Files</button>
                                    </div>
                                </div>
                                
                                <div class="thisContainer">
                                    <h4 id="usr_cnt">Recipients(0)</h4>
                                    <div class="users_box">
                                                
                                    </div>
                                    <div class="addBox">
                                        <button id="add_user_btn">Add users</button>
                                    </div>
                                </div>
                                <div class="commentsflshr">
                                    <label for="share description"> Add Comments</label>
                                    <textarea name="share description" id="fl_shr_desc" cols="30"></textarea>

                                </div>
                                <div class="actions">
                                    <button class="shr_files">Share items</button>
                                    <button class="clr_selection">Clear Selection</button>
                                    <button class="cls_shr_diag">Exit</button>
                                </div>
                            </div>
                        </dialog>
                  </div>
              </div>
              <nav class="iq-sidebar-menu">
                  <ul id="iq-sidebar-toggle" class="iq-menu">
                       <li class="active">
                              <a href="/BungoArch/html/backend/Admin/php/User-dashboardtst.php" class="">
                                  <i class="las la-home iq-arrow-left"></i><span>Dashboard</span>
                              </a>
                          <ul id="dashboard" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                          </ul>
                       </li>
                       
                       <li class=" ">
                        <!-- deactivated Manage Users -->
                        <!-- <a href="#otherpage" class="collapsed" data-toggle="collapse" aria-expanded="false">
                            <i class="lab la-wpforms iq-arrow-left"></i><span>Manage Users</span>
                            <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                            <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
                        </a> -->
                        <!-- <ul id="otherpage" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li class=" ">
                                    <a href="#user" class="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i class="las la-user-cog"></i><span>User Details</span>
                                        <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="user" class="iq-submenu collapse" data-parent="#otherpage">
                                            <li class=" ">
                                                <a href="user-add.html">
                                                    <i class="las la-user-plus"></i><span>Add User</span>
                                                </a>
                                            </li>
                                            <li class=" ">
                                                <a href="user-list.html">
                                                    <i class="las la-list-alt"></i><span>User List</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                        </ul> -->
                     </li>
                       <!-- <li class=" ">
                          <a href="#mydrive" class="collapsed" data-toggle="collapse" aria-expanded="false">
                              <i class="las la-hdd"></i><span>Admin</span>
                              <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                              <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
                          </a>
                          
                          <ul id="mydrive" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                            <li class=" ">
                                <a href="Admin-profile.html">
                                    <i class="las la-id-card"></i><span>My Profile</span>
                                </a>
                            </li>
                                  <li class=" ">
                                          <a href="/BUNGOARCH/html/backend/page-alexa.html">
                                              <i class="lab la-blogger-b"></i><span>Alexa Workshop</span>
                                          </a>
                                  </li>
                                  <li class=" ">
                                          <a href="/BUNGOARCH/html/backend/page-android.html">
                                              <i class="las la-share-alt"></i><span>Android</span>
                                          </a>
                                  </li>
                                  <li class=" ">
                                          <a href="/BUNGOARCH/html/backend/page-brightspot.html">
                                              <i class="las la-icons"></i><span>Brightspot</span>
                                          </a>
                                  </li>
                                  <li class=" ">
                                          <a href="/BUNGOARCH/html/backend/page-ionic.html">
                                              <i class="las la-icons"></i><span>Ionic Chat App</span>
                                          </a>
                                  </li>
                          </ul>
                       </li> -->
                       
                       <li class=" ">
                        <a href="/BUNGOARCH/html/backend/Admin/php/admin-profile-edit.php" class="">
                            <i class="ri-settings-3-line"></i><span>Settings</span>
                        </a>
                    <ul id="page-delete" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                    </ul>
                 </li>
                       <li class=" ">
                              <a href="/BUNGOARCH/html/backend/Admin/php/foldersNFiles.php" class="">
                                  <i class="lar la-file-alt iq-arrow-left"></i><span>MyFiles and Folders</span>
                              </a>
                          <ul id="page-files" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                          </ul>
                       </li>
                       <li class=" ">
                        <a href="#Statistic" class="">
                            <i class="las la-heart"></i><span>Analytics</span>
                        </a>
                    <ul id="page-folders" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                    </ul>
                 </li>                      
                       <!-- <li class=" ">
                              <a href="/BUNGOARCH/html/backend/page-folders.html" class="">
                                  <i class="las la-stopwatch iq-arrow-left"></i><span>Recent</span>
                              </a>
                          <ul id="page-folders" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                          </ul>
                       </li>
                       <li class=" ">
                              <a href="favourite.html" class="">
                                  <i class="lar la-star"></i><span>Favourite</span>
                              </a>
                          <ul id="page-fevourite" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                          </ul>
                       </li> -->
                       <!-- <li class=" ">
                              <a href="Trash.html" class="">
                                  <i class="las la-trash-alt iq-arrow-left"></i><span>Trash</span>
                              </a>
                          <ul id="page-delete" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                          </ul>
                       </li> -->
                  </ul>
              </nav>
              <div class="sidebar-bottom">
                  <h4 class="mb-3"><i class="las la-cloud mr-2"></i>Storage</h4>
                  <p>17.1 / 20 GB Used</p>
                  <div class="iq-progress-bar mb-3">
                      <span class="bg-primary iq-progress progress-1" data-percent="67">
                      </span>
                  </div>
                  <p>75% Full - 3.9 GB Free</p>
                  <a href="#" class="btn btn-outline-primary view-more mt-4">Manage Files</a>
              </div>
              <div class="p-3"></div>
          </div>
          </div>