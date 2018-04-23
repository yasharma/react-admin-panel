import React, { Component } from 'react';
import BrandLogo from '../../assets/images/robust-logo-light.png';
import BrandSmallLogo from '../../assets/images/robust-logo-small.png';
import UserAvatar_1 from '../../assets/images/avatar-s-1.png';
import UserAvatar_2 from '../../assets/images/avatar-s-2.png';
import CarouselImage from '../../assets/images/05.jpg';
const style = {
	height: '440px'
}
class Home extends Component {
	render() {
		return (
			<div>
				<nav className="header-navbar navbar navbar-with-menu navbar-fixed-top navbar-semi-dark navbar-shadow">
				  <div className="navbar-wrapper">
				    <div className="navbar-header">
				      <ul className="nav navbar-nav">
				        <li className="nav-item mobile-menu hidden-md-up float-xs-left"><a className="nav-link nav-menu-main menu-toggle hidden-xs"><i className="icon-menu5 font-large-1"></i></a></li>
				        <li className="nav-item">
				        	<a className="navbar-brand nav-link">
				        		<img alt="branding logo" src={BrandLogo} data-expand={BrandLogo} data-collapse={BrandSmallLogo} className="brand-logo" />
								{/*<h3 className="text-logo">Administrative</h3>*/}			        		
				        	</a>
				        </li>
				        <li className="nav-item hidden-md-up float-xs-right"><a data-toggle="collapse" data-target="#navbar-mobile" className="nav-link open-navbar-container"><i className="icon-ellipsis pe-2x icon-icon-rotate-right-right"></i></a></li>
				      </ul>
				    </div>
				    <div className="navbar-container content container-fluid">
				      <div id="navbar-mobile" className="collapse navbar-toggleable-sm">
				        <ul className="nav navbar-nav">
				          <li className="nav-item hidden-sm-down"><a className="nav-link nav-menu-main menu-toggle hidden-xs"><i className="icon-menu5">         </i></a></li>
				        </ul>
				        <ul className="nav navbar-nav float-xs-right">
				          <li className="dropdown dropdown-notification nav-item"><a  data-toggle="dropdown" className="nav-link nav-link-label"><i className="ficon icon-bell4"></i><span className="tag tag-pill tag-default tag-danger tag-default tag-up">5</span></a>
				            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
				              <li className="dropdown-menu-header">
				                <h6 className="dropdown-header m-0"><span className="grey darken-2">Notifications</span><span className="notification-tag tag tag-default tag-danger float-xs-right m-0">5 New</span></h6>
				              </li>
				              <li className="list-group scrollable-container"><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left valign-middle"><i className="icon-cart3 icon-bg-circle bg-cyan"></i></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">You have new order!</h6>
				                      <p className="notification-text font-small-3 text-muted">Lorem ipsum dolor sit amet, consectetuer elit.</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">30 minutes ago</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left valign-middle"><i className="icon-monitor3 icon-bg-circle bg-red bg-darken-1"></i></div>
				                    <div className="media-body">
				                      <h6 className="media-heading red darken-1">99% Server load</h6>
				                      <p className="notification-text font-small-3 text-muted">Aliquam tincidunt mauris eu risus.</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Five hour ago</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left valign-middle"><i className="icon-server2 icon-bg-circle bg-yellow bg-darken-3"></i></div>
				                    <div className="media-body">
				                      <h6 className="media-heading yellow darken-3">Warning notifixation</h6>
				                      <p className="notification-text font-small-3 text-muted">Vestibulum auctor dapibus neque.</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left valign-middle"><i className="icon-check2 icon-bg-circle bg-green bg-accent-3"></i></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Complete the task</h6><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last week</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left valign-middle"><i className="icon-bar-graph-2 icon-bg-circle bg-teal"></i></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Generate monthly report</h6><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Last month</time></small>
				                    </div>
				                  </div></a></li>
				              <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-xs-center">Read all notifications</a></li>
				            </ul>
				          </li>
				          <li className="dropdown dropdown-notification nav-item"><a  data-toggle="dropdown" className="nav-link nav-link-label"><i className="ficon icon-mail6"></i><span className="tag tag-pill tag-default tag-info tag-default tag-up">8</span></a>
				            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
				              <li className="dropdown-menu-header">
				                <h6 className="dropdown-header m-0"><span className="grey darken-2">Messages</span><span className="notification-tag tag tag-default tag-info float-xs-right m-0">4 New</span></h6>
				              </li>
				              <li className="list-group scrollable-container"><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle"><img src={UserAvatar_1} alt="avatar" /><i></i></span></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Margaret Govan</h6>
				                      <p className="notification-text font-small-3 text-muted">I like your portfolio, let's start the project.</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Today</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left"><span className="avatar avatar-sm avatar-busy rounded-circle"><img src={UserAvatar_2} alt="avatar" /><i></i></span></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Bret Lezama</h6>
				                      <p className="notification-text font-small-3 text-muted">I have seen your work, there is</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Tuesday</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left"><span className="avatar avatar-sm avatar-online rounded-circle"><img src={UserAvatar_1} alt="avatar"/><i></i></span></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Carie Berra</h6>
				                      <p className="notification-text font-small-3 text-muted">Can we have call in this week ?</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">Friday</time></small>
				                    </div>
				                  </div></a><a className="list-group-item">
				                  <div className="media">
				                    <div className="media-left"><span className="avatar avatar-sm avatar-away rounded-circle"><img src={UserAvatar_2} alt="avatar"/><i></i></span></div>
				                    <div className="media-body">
				                      <h6 className="media-heading">Eric Alsobrook</h6>
				                      <p className="notification-text font-small-3 text-muted">We have project party this saturday night.</p><small>
				                        <time dateTime="2015-06-11T18:29:20+08:00" className="media-meta text-muted">last month</time></small>
				                    </div>
				                  </div></a></li>
				              <li className="dropdown-menu-footer"><a className="dropdown-item text-muted text-xs-center">Read all messages</a></li>
				            </ul>
				          </li>
				          <li className="dropdown dropdown-user nav-item"><a  data-toggle="dropdown" className="dropdown-toggle nav-link dropdown-user-link"><span className="avatar avatar-online"><img src={UserAvatar_1} alt="avatar"/><i></i></span><span className="user-name">John Doe</span></a>
				            <div className="dropdown-menu dropdown-menu-right"><a  className="dropdown-item"><i className="icon-head"></i> Edit Profile</a><a  className="dropdown-item"><i className="icon-mail6"></i> My Inbox</a><a  className="dropdown-item"><i className="icon-clipboard2"></i> Task</a><a  className="dropdown-item"><i className="icon-calendar5"></i> Calender</a>
				              <div className="dropdown-divider"></div><a  className="dropdown-item"><i className="icon-power3"></i> Logout</a>
				            </div>
				          </li>
				        </ul>
				      </div>
				    </div>
				  </div>
				</nav>
				<div data-scroll-to-active="true" className="main-menu menu-fixed menu-dark menu-accordion menu-shadow">
				  
				  <div className="main-menu-header">
				    <input type="text" placeholder="Search" className="menu-search form-control round"/>
				  </div>
				  <div className="main-menu-content">
				    <ul id="main-menu-navigation" data-menu="menu-navigation" className="navigation navigation-main">
				      <li className=" nav-item"><a href="index.html"><i className="icon-home3"></i><span data-i18n="nav.dash.main" className="menu-title">Dashboard</span><span className="tag tag tag-primary tag-pill float-xs-right mr-2">2</span></a>
				        <ul className="menu-content">
				          <li className="active"><a href="index.html" data-i18n="nav.dash.main" className="menu-item">Dashboard</a>
				          </li>
				          <li><a href="dashboard-2.html" data-i18n="nav.dash.main" className="menu-item">Dashboard 2</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-stack-2"></i><span data-i18n="nav.page_layouts.main" className="menu-title">Page layouts</span></a>
				        <ul className="menu-content">
				          <li><a href="layout-1-column.html" data-i18n="nav.page_layouts.1_column" className="menu-item">1 column</a>
				          </li>
				          <li><a href="layout-2-columns.html" data-i18n="nav.page_layouts.2_columns" className="menu-item">2 columns</a>
				          </li>
				          <li><a href="layout-boxed.html" data-i18n="nav.page_layouts.boxed_layout" className="menu-item">Boxed layout</a>
				          </li>
				          <li><a href="layout-static.html" data-i18n="nav.page_layouts.static_layout" className="menu-item">Static layout</a>
				          </li>
				          <li className="navigation-divider"></li>
				          <li><a href="layout-light.html" data-i18n="nav.page_layouts.light_layout" className="menu-item">Light layout</a>
				          </li>
				          <li><a href="layout-dark.html" data-i18n="nav.page_layouts.dark_layout" className="menu-item">Dark layout</a>
				          </li>
				          <li><a href="layout-semi-dark.html" data-i18n="nav.page_layouts.semi_dark_layout" className="menu-item">Semi dark layout</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-briefcase4"></i><span data-i18n="nav.project.main" className="menu-title">Pages</span></a>
				        <ul className="menu-content">
				          <li><a href="invoice-template.html" data-i18n="nav.invoice.invoice_template" className="menu-item">Invoice Template</a>
				          </li>
				          <li><a href="gallery-grid.html" data-i18n="nav.gallery_pages.gallery_grid" className="menu-item">Gallery Grid</a>
				          </li>
				          <li><a href="search-page.html" data-i18n="nav.search_pages.search_page" className="menu-item">Search Page</a>
				          </li>
				          <li><a href="search-website.html" data-i18n="nav.search_pages.search_website" className="menu-item">Search Website</a>
				          </li>
				          <li><a href="login-simple.html" data-i18n="nav.login_register_pages.login_simple" className="menu-item">Login Simple</a>
				          </li>
				          <li><a href="register-simple.html" data-i18n="nav.login_register_pages.register_simple" className="menu-item">Register Simple</a>
				          </li>
				          <li><a href="unlock-user.html" data-i18n="nav.login_register_pages.unlock_user" className="menu-item">Unlock User</a>
				          </li>
				          <li><a href="recover-password.html" data-i18n="nav.login_register_pages.recover_password" className="menu-item">Recover Password</a>
				          </li>
				          <li><a  data-i18n="nav.error_pages.main" className="menu-item">Error</a>
				            <ul className="menu-content">
				              <li><a href="error-400.html" data-i18n="nav.error_pages.error_400" className="menu-item">Error 400</a>
				              </li>
				              <li><a href="error-401.html" data-i18n="nav.error_pages.error_401" className="menu-item">Error 401</a>
				              </li>
				              <li><a href="error-403.html" data-i18n="nav.error_pages.error_403" className="menu-item">Error 403</a>
				              </li>
				              <li><a href="error-404.html" data-i18n="nav.error_pages.error_404" className="menu-item">Error 404</a>
				              </li>
				              <li><a href="error-500.html" data-i18n="nav.error_pages.error_500" className="menu-item">Error 500</a>
				              </li>
				            </ul>
				          </li>
				          <li><a href="coming-soon-flat.html" data-i18n="nav.other_pages.coming_soon.coming_soon_flat" className="menu-item">Coming Soon</a>
				          </li>
				          <li><a href="under-maintenance.html" data-i18n="nav.other_pages.under_maintenance" className="menu-item">Maintenance</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-ios-albums-outline"></i><span data-i18n="nav.cards.main" className="menu-title">Cards</span></a>
				        <ul className="menu-content">
				          <li><a href="card-bootstrap.html" data-i18n="nav.cards.card_bootstrap" className="menu-item">Bootstrap Cards</a>
				          </li>
				          <li><a href="card-actions.html" data-i18n="nav.cards.card_actions" className="menu-item">Card Action</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-whatshot"></i><span data-i18n="nav.advance_cards.main" className="menu-title">Advance Cards</span></a>
				        <ul className="menu-content">
				          <li><a href="card-statistics.html" data-i18n="nav.cards.card_statistics" className="menu-item">Statistics</a>
				          </li>
				          <li><a href="card-charts.html" data-i18n="nav.cards.card_charts" className="menu-item">Charts</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-compass3"></i><span data-i18n="nav.content.main" className="menu-title">Content</span></a>
				        <ul className="menu-content">
				          <li><a href="content-grid.html" data-i18n="nav.content.content_grid" className="menu-item">Grid</a>
				          </li>
				          <li><a href="content-typography.html" data-i18n="nav.content.content_typography" className="menu-item">Typography</a>
				          </li>
				          <li><a href="content-text-utilities.html" data-i18n="nav.content.content_text_utilities" className="menu-item">Text utilities</a>
				          </li>
				          <li><a href="content-helper-classes.html" data-i18n="nav.content.content_helper_classes" className="menu-item">Helper classes</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-grid2"></i><span data-i18n="nav.components.main" className="menu-title">Components</span></a>
				        <ul className="menu-content">
				          <li><a href="component-alerts.html" data-i18n="nav.components.component_alerts" className="menu-item">Alerts</a>
				          </li>
				          <li><a href="component-buttons-basic.html" data-i18n="nav.components.components_buttons.component_buttons_basic" className="menu-item">Basic Buttons</a>
				          </li>
				          <li><a href="component-carousel.html" data-i18n="nav.components.component_carousel" className="menu-item">Carousel</a>
				          </li>
				          <li><a href="component-collapse.html" data-i18n="nav.components.component_collapse" className="menu-item">Collapse</a>
				          </li>
				          <li><a href="component-dropdowns.html" data-i18n="nav.components.component_dropdowns" className="menu-item">Dropdowns</a>
				          </li>
				          <li><a href="component-list-group.html" data-i18n="nav.components.component_list_group" className="menu-item">List Group</a>
				          </li>
				          <li><a href="component-modals.html" data-i18n="nav.components.component_modals" className="menu-item">Modals</a>
				          </li>
				          <li><a href="component-pagination.html" data-i18n="nav.components.component_pagination" className="menu-item">Pagination</a>
				          </li>
				          <li><a href="component-navs-component.html" data-i18n="nav.components.component_navs_component" className="menu-item">Navs Component</a>
				          </li>
				          <li><a href="component-tabs-component.html" data-i18n="nav.components.component_tabs_component" className="menu-item">Tabs Component</a>
				          </li>
				          <li><a href="component-pills-component.html" data-i18n="nav.components.component_pills_component" className="menu-item">Pills Component</a>
				          </li>
				          <li><a href="component-tooltips.html" data-i18n="nav.components.component_tooltips" className="menu-item">Tooltips</a>
				          </li>
				          <li><a href="component-popovers.html" data-i18n="nav.components.component_popovers" className="menu-item">Popovers</a>
				          </li>
				          <li><a href="component-tags.html" data-i18n="nav.components.component_tags" className="menu-item">Tags</a>
				          </li>
				          <li><a href="component-pill-tags.html" className="menu-item">Pill Tags</a>
				          </li>
				          <li><a href="component-progress.html" data-i18n="nav.components.component_progress" className="menu-item">Progress</a>
				          </li>
				          <li><a href="component-media-objects.html" data-i18n="nav.components.component_media_objects" className="menu-item">Media Objects</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-eye6"></i><span data-i18n="nav.icons.main" className="menu-title">Icons</span></a>
				        <ul className="menu-content">
				          <li><a href="icons-feather.html" data-i18n="nav.icons.icons_feather" className="menu-item">Feather</a>
				          </li>
				          <li><a href="icons-ionicons.html" data-i18n="nav.icons.icons_ionicons" className="menu-item">Ionicons</a>
				          </li>
				          <li><a href="icons-fps-line.html" data-i18n="nav.icons.icons_fps_line" className="menu-item">FPS Line Icons</a>
				          </li>
				          <li><a href="icons-ico-moon.html" data-i18n="nav.icons.icons_ico_moon" className="menu-item">Ico Moon</a>
				          </li>
				          <li><a href="icons-font-awesome.html" data-i18n="nav.icons.icons_font_awesome" className="menu-item">Font Awesome</a>
				          </li>
				          <li><a href="icons-meteocons.html" data-i18n="nav.icons.icons_meteocons" className="menu-item">Meteocons</a>
				          </li>
				          <li><a href="icons-evil.html" data-i18n="nav.icons.icons_evil" className="menu-item">Evil Icons</a>
				          </li>
				          <li><a href="icons-linecons.html" data-i18n="nav.icons.icons_linecons" className="menu-item">Linecons</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a href="form-layout-basic.html"><i className="icon-paper"></i><span data-i18n="nav.form_layouts.form_layout_basic" className="menu-title">Basic Forms</span></a>
				      </li>
				      <li className=" nav-item"><a href="table-basic.html"><i className="icon-table2"></i><span data-i18n="nav.bootstrap_tables.table_basic" className="menu-title">Basic Tables</span></a>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-bar-graph-2"></i><span data-i18n="nav.google_charts.main" className="menu-title">google Charts</span></a>
				        <ul className="menu-content">
				          <li><a href="google-bar-charts.html" data-i18n="nav.google_charts.google_bar_charts" className="menu-item">Bar charts</a>
				          </li>
				          <li><a href="google-line-charts.html" data-i18n="nav.google_charts.google_line_charts" className="menu-item">Line charts</a>
				          </li>
				          <li><a href="google-pie-charts.html" data-i18n="nav.google_charts.google_pie_charts" className="menu-item">Pie charts</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-stats-dots"></i><span data-i18n="nav.chartjs.main" className="menu-title">Chartjs</span></a>
				        <ul className="menu-content">
				          <li><a href="chartjs-line-charts.html" data-i18n="nav.chartjs.chartjs_line_charts" className="menu-item">Line charts</a>
				          </li>
				          <li><a href="chartjs-bar-charts.html" data-i18n="nav.chartjs.chartjs_bar_charts" className="menu-item">Bar charts</a>
				          </li>
				          <li><a href="chartjs-pie-doughnut-charts.html" data-i18n="nav.chartjs.chartjs_pie_doughnut_charts" className="menu-item">Pie &amp; Doughnut charts</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-pie-graph2"></i><span data-i18n="nav.flot_charts.main" className="menu-title">Flot Charts</span></a>
				        <ul className="menu-content">
				          <li><a href="flot-line-charts.html" data-i18n="nav.flot_charts.flot_line_charts" className="menu-item">Line charts</a>
				          </li>
				          <li><a href="flot-bar-charts.html" data-i18n="nav.flot_charts.flot_bar_charts" className="menu-item">Bar charts</a>
				          </li>
				          <li><a href="flot-pie-charts.html" data-i18n="nav.flot_charts.flot_pie_charts" className="menu-item">Pie charts</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-map22"></i><span data-i18n="nav.maps.main" className="menu-title">Maps</span></a>
				        <ul className="menu-content">
				          <li><a href="gmaps-basic-maps.html" data-i18n="nav.maps.google_maps.gmaps_basic_maps" className="menu-item">Maps</a>
				          </li>
				          <li><a href="vector-maps-jvq.html" data-i18n="nav.maps.vector_maps.vector_maps_jvq" className="menu-item">Vector Maps</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-paint-format"></i><span data-i18n="nav.color_palette.main" className="menu-title">Color Palette</span></a>
				        <ul className="menu-content">
				          <li><a href="color-palette-primary.html" data-i18n="nav.color_palette.color_palette_primary" className="menu-item">Primary palette</a>
				          </li>
				          <li><a href="color-palette-danger.html" data-i18n="nav.color_palette.color_palette_danger" className="menu-item">Danger palette</a>
				          </li>
				          <li><a href="color-palette-success.html" data-i18n="nav.color_palette.color_palette_success" className="menu-item">Success palette</a>
				          </li>
				          <li><a href="color-palette-warning.html" data-i18n="nav.color_palette.color_palette_warning" className="menu-item">Warning palette</a>
				          </li>
				          <li><a href="color-palette-info.html" data-i18n="nav.color_palette.color_palette_info" className="menu-item">Info palette</a>
				          </li>
				          <li className="navigation-divider"></li>
				          <li><a href="color-palette-red.html" data-i18n="nav.color_palette.color_palette_red" className="menu-item">Red palette</a>
				          </li>
				          <li><a href="color-palette-pink.html" data-i18n="nav.color_palette.color_palette_pink" className="menu-item">Pink palette</a>
				          </li>
				          <li><a href="color-palette-purple.html" data-i18n="nav.color_palette.color_palette_purple" className="menu-item">Purple palette</a>
				          </li>
				          <li><a href="color-palette-deep-purple.html" data-i18n="nav.color_palette.color_palette_deep_purple" className="menu-item">Deep Purple palette</a>
				          </li>
				          <li><a href="color-palette-indigo.html" data-i18n="nav.color_palette.color_palette_indigo" className="menu-item">Indigo palette</a>
				          </li>
				          <li><a href="color-palette-blue.html" data-i18n="nav.color_palette.color_palette_blue" className="menu-item">Blue palette</a>
				          </li>
				          <li><a href="color-palette-light-blue.html" data-i18n="nav.color_palette.color_palette_light_blue" className="menu-item">Light Blue palette</a>
				          </li>
				          <li><a href="color-palette-cyan.html" data-i18n="nav.color_palette.color_palette_cyan" className="menu-item">Cyan palette</a>
				          </li>
				          <li><a href="color-palette-teal.html" data-i18n="nav.color_palette.color_palette_teal" className="menu-item">Teal palette</a>
				          </li>
				          <li><a href="color-palette-green.html" data-i18n="nav.color_palette.color_palette_green" className="menu-item">Green palette</a>
				          </li>
				          <li><a href="color-palette-light-green.html" data-i18n="nav.color_palette.color_palette_light_green" className="menu-item">Light Green palette</a>
				          </li>
				          <li><a href="color-palette-lime.html" data-i18n="nav.color_palette.color_palette_lime" className="menu-item">Lime palette</a>
				          </li>
				          <li><a href="color-palette-yellow.html" data-i18n="nav.color_palette.color_palette_yellow" className="menu-item">Yellow palette</a>
				          </li>
				          <li><a href="color-palette-amber.html" data-i18n="nav.color_palette.color_palette_amber" className="menu-item">Amber palette</a>
				          </li>
				          <li><a href="color-palette-orange.html" data-i18n="nav.color_palette.color_palette_orange" className="menu-item">Orange palette</a>
				          </li>
				          <li><a href="color-palette-deep-orange.html" data-i18n="nav.color_palette.color_palette_deep_orange" className="menu-item">Deep Orange palette</a>
				          </li>
				          <li><a href="color-palette-brown.html" data-i18n="nav.color_palette.color_palette_brown" className="menu-item">Brown palette</a>
				          </li>
				          <li><a href="color-palette-blue-grey.html" data-i18n="nav.color_palette.color_palette_blue_grey" className="menu-item">Blue Grey palette</a>
				          </li>
				          <li><a href="color-palette-grey.html" data-i18n="nav.color_palette.color_palette_grey" className="menu-item">Grey palette</a>
				          </li>
				        </ul>
				      </li>
				      <li className=" nav-item"><a href="changelog.html"><i className="icon-copy"></i><span data-i18n="nav.changelog.main" className="menu-title">Changelog</span><span className="tag tag tag-pill tag-danger float-xs-right">1.0</span></a>
				      </li>
				      <li className="disabled nav-item"><a ><i className="icon-eye-disabled"></i><span data-i18n="nav.disabled_menu.main" className="menu-title">Disabled Menu</span></a>
				      </li>
				      <li className=" nav-item"><a ><i className="icon-android-funnel"></i><span data-i18n="nav.menu_levels.main" className="menu-title">Menu levels</span></a>
				        <ul className="menu-content">
				          <li><a  data-i18n="nav.menu_levels.second_level" className="menu-item">Second level</a>
				          </li>
				          <li><a  data-i18n="nav.menu_levels.second_level_child.main" className="menu-item">Second level child</a>
				            <ul className="menu-content">
				              <li><a  data-i18n="nav.menu_levels.second_level_child.third_level" className="menu-item">Third level</a>
				              </li>
				              <li><a  data-i18n="nav.menu_levels.second_level_child.third_level_child.main" className="menu-item">Third level child</a>
				                <ul className="menu-content">
				                  <li><a  data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level1" className="menu-item">Fourth level</a>
				                  </li>
				                  <li><a  data-i18n="nav.menu_levels.second_level_child.third_level_child.fourth_level2" className="menu-item">Fourth level</a>
				                  </li>
				                </ul>
				              </li>
				            </ul>
				          </li>
				        </ul>
				      </li>
				      <li className=" navigation-header"><span data-i18n="nav.category.support">Support</span><i data-toggle="tooltip" data-placement="right" data-original-title="Support" className="icon-ellipsis icon-ellipsis"></i>
				      </li>
				      <li className=" nav-item"><a href="https://github.com/pixinvent/robust-free-bootstrap-admin-template/issues"><i className="icon-support"></i><span data-i18n="nav.support_raise_support.main" className="menu-title">Raise Support</span></a>
				      </li>
				      <li className=" nav-item"><a href="https://pixinvent.com/free-bootstrap-template/robust-lite/documentation"><i className="icon-document-text"></i><span data-i18n="nav.support_documentation.main" className="menu-title">Documentation</span></a>
				      </li>
				    </ul>
				  </div>
				</div>
				<div className="app-content content container-fluid">
				  	<div className="content-wrapper">
					    <div className="content-header row">
					    </div>
					    <div className="content-body">
							<div className="row">
							  <div className="col-xl-3 col-lg-6 col-xs-12">
							      <div className="card">
							          <div className="card-body">
							              <div className="card-block">
							                  <div className="media">
							                      <div className="media-body text-xs-left">
							                          <h3 className="pink">278</h3>
							                          <span>New Projects</span>
							                      </div>
							                      <div className="media-right media-middle">
							                          <i className="icon-bag2 pink font-large-2 float-xs-right"></i>
							                      </div>
							                  </div>
							              </div>
							          </div>
							      </div>
							  </div>
							  <div className="col-xl-3 col-lg-6 col-xs-12">
							      <div className="card">
							          <div className="card-body">
							              <div className="card-block">
							                  <div className="media">
							                      <div className="media-body text-xs-left">
							                          <h3 className="teal">156</h3>
							                          <span>New Clients</span>
							                      </div>
							                      <div className="media-right media-middle">
							                          <i className="icon-user1 teal font-large-2 float-xs-right"></i>
							                      </div>
							                  </div>
							              </div>
							          </div>
							      </div>
							  </div>
							  <div className="col-xl-3 col-lg-6 col-xs-12">
							      <div className="card">
							          <div className="card-body">
							              <div className="card-block">
							                  <div className="media">
							                      <div className="media-body text-xs-left">
							                          <h3 className="deep-orange">64.89 %</h3>
							                          <span>Conversion Rate</span>
							                      </div>
							                      <div className="media-right media-middle">
							                          <i className="icon-diagram deep-orange font-large-2 float-xs-right"></i>
							                      </div>
							                  </div>
							              </div>
							          </div>
							      </div>
							  </div>
							  <div className="col-xl-3 col-lg-6 col-xs-12">
							      <div className="card">
							          <div className="card-body">
							              <div className="card-block">
							                  <div className="media">
							                      <div className="media-body text-xs-left">
							                          <h3 className="cyan">423</h3>
							                          <span>Support Tickets</span>
							                      </div>
							                      <div className="media-right media-middle">
							                          <i className="icon-ios-help-outline cyan font-large-2 float-xs-right"></i>
							                      </div>
							                  </div>
							              </div>
							          </div>
							      </div>
							  </div>
							</div>
						    <div className="row">
						        <div className="col-xl-8 col-lg-12">
						            <div className="card">
						                <div className="card-body">
						                    <ul className="list-inline text-xs-center pt-2 m-0">
						                        <li className="mr-1">
						                            <h6><i className="icon-circle warning"></i> <span className="grey darken-1">Remaining</span></h6>
						                        </li>
						                        <li className="mr-1">
						                            <h6><i className="icon-circle success"></i> <span className="grey darken-1">Completed</span></h6>
						                        </li>
						                    </ul>
						                    <div className="chartjs height-250">
						                        <canvas id="line-stacked-area" height="250"></canvas>
						                    </div>
						                </div>
						                <div className="card-footer">
						                    <div className="row">
						                        <div className="col-xs-3 text-xs-center">
						                            <span className="text-muted">Total Projects</span>
						                            <h2 className="block font-weight-normal">18</h2>
						                            <progress className="progress progress-xs mt-2 progress-success" value="70" max="100"></progress>
						                        </div>
						                        <div className="col-xs-3 text-xs-center">
						                            <span className="text-muted">Total Task</span>
						                            <h2 className="block font-weight-normal">125</h2>
						                            <progress className="progress progress-xs mt-2 progress-success" value="40" max="100"></progress>
						                        </div>
						                        <div className="col-xs-3 text-xs-center">
						                            <span className="text-muted">Completed Task</span>
						                            <h2 className="block font-weight-normal">242</h2>
						                            <progress className="progress progress-xs mt-2 progress-success" value="60" max="100"></progress>
						                        </div>
						                        <div className="col-xs-3 text-xs-center">
						                            <span className="text-muted">Total Revenue</span>
						                            <h2 className="block font-weight-normal">$11,582</h2>
						                            <progress className="progress progress-xs mt-2 progress-success" value="90" max="100"></progress>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						        <div className="col-xl-4 col-lg-12">
						            <div className="card card-inverse bg-info">
						                <div className="card-body">
						                    <div className="position-relative">
						                        <div className="chart-title position-absolute mt-2 ml-2 white">
						                            <h1 className="display-4">84%</h1>
						                            <span>Employees Satisfied</span>
						                        </div>
						                        <canvas id="emp-satisfaction" className="height-400 block"></canvas>
						                        <div className="chart-stats position-absolute position-bottom-0 position-right-0 mb-2 mr-3 white">
						                            <a  className="btn bg-info bg-darken-3 mr-1 white">Statistics <i className="icon-stats-bars"></i></a> for the last year.
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
						    <div className="row match-height">
						        <div className="col-xl-4 col-lg-12">
						            <div className="card">
						                <div className="card-body">
						                    <div className="media">
						                        <div className="p-2 text-xs-center bg-deep-orange media-left media-middle">
						                            <i className="icon-user1 font-large-2 white"></i>
						                        </div>
						                        <div className="p-2 media-body">
						                            <h5 className="deep-orange">New Users</h5>
						                            <h5 className="text-bold-400">1,22,356</h5>
						                            <progress className="progress progress-sm progress-deep-orange mt-1 mb-0" value="45" max="100"></progress>
						                        </div>
						                    </div>
						                </div>
						            </div>
						            <div className="card">
						                <div className="card-body">
						                    <div className="media">
						                        <div className="p-2 text-xs-center bg-cyan media-left media-middle">
						                            <i className="icon-camera7 font-large-2 white"></i>
						                        </div>
						                        <div className="p-2 media-body">
						                            <h5>New Products</h5>
						                            <h5 className="text-bold-400">28</h5>
						                        </div>
						                    </div>
						                </div>
						            </div>
						            <div className="card">
						                <div className="card-body">
						                    <div className="media">
						                        <div className="p-2 media-body text-xs-left">
						                            <h5>New Users</h5>
						                            <h5 className="text-bold-400">1,22,356</h5>
						                        </div>
						                        <div className="p-2 text-xs-center bg-teal media-right media-middle">
						                            <i className="icon-user1 font-large-2 white"></i>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						        <div className="col-xl-8 col-lg-12">
						            <div className="card">
						                <div className="card-header">
						                    <h4 className="card-title">Recent Invoices</h4>
						                    <a className="heading-elements-toggle"><i className="icon-ellipsis font-medium-3"></i></a>
						                    <div className="heading-elements">
						                        <ul className="list-inline mb-0">
						                            <li><a data-action="reload"><i className="icon-reload"></i></a></li>
						                            <li><a data-action="expand"><i className="icon-expand2"></i></a></li>
						                        </ul>
						                    </div>
						                </div>
						                <div className="card-body">
						                    <div className="card-block">
						                        <p>Total paid invoices 240, unpaid 150. <span className="float-xs-right"><a >Invoice Summary <i className="icon-arrow-right2"></i></a></span></p>
						                    </div>
						                    <div className="table-responsive">
						                        <table className="table table-hover mb-0">
						                            <thead>
						                                <tr>
						                                    <th>Invoice#</th>
						                                    <th>Customer Name</th>
						                                    <th>Status</th>
						                                    <th>Due</th>
						                                    <th>Amount</th>
						                                </tr>
						                            </thead>
						                            <tbody>
						                                <tr>
						                                    <td className="text-truncate"><a >INV-001001</a></td>
						                                    <td className="text-truncate">Elizabeth W.</td>
						                                    <td className="text-truncate"><span className="tag tag-default tag-success">Paid</span></td>
						                                    <td className="text-truncate">10/05/2016</td>
						                                    <td className="text-truncate">$ 1200.00</td>
						                                </tr>
						                                <tr>
						                                    <td className="text-truncate"><a >INV-001012</a></td>
						                                    <td className="text-truncate">Andrew D.</td>
						                                    <td className="text-truncate"><span className="tag tag-default tag-success">Paid</span></td>
						                                    <td className="text-truncate">20/07/2016</td>
						                                    <td className="text-truncate">$ 152.00</td>
						                                </tr>
						                                <tr>
						                                    <td className="text-truncate"><a >INV-001401</a></td>
						                                    <td className="text-truncate">Megan S.</td>
						                                    <td className="text-truncate"><span className="tag tag-default tag-success">Paid</span></td>
						                                    <td className="text-truncate">16/11/2016</td>
						                                    <td className="text-truncate">$ 1450.00</td>
						                                </tr>
						                                <tr>
						                                    <td className="text-truncate"><a >INV-01112</a></td>
						                                    <td className="text-truncate">Doris R.</td>
						                                    <td className="text-truncate"><span className="tag tag-default tag-warning">Overdue</span></td>
						                                    <td className="text-truncate">11/12/2016</td>
						                                    <td className="text-truncate">$ 5685.00</td>
						                                </tr>
						                                <tr>
						                                    <td className="text-truncate"><a >INV-008101</a></td>
						                                    <td className="text-truncate">Walter R.</td>
						                                    <td className="text-truncate"><span className="tag tag-default tag-warning">Overdue</span></td>
						                                    <td className="text-truncate">18/05/2016</td>
						                                    <td className="text-truncate">$ 685.00</td>
						                                </tr>
						                            </tbody>
						                        </table>
						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
						    <div className="row match-height">
						        <div className="col-xl-4 col-md-6 col-sm-12">
						            <div className="card" style={style}>
						                <div className="card-body">
						                    <img className="card-img-top img-fluid" src={CarouselImage} alt="Card cap" />
						                    <div className="card-block">
						                        <h4 className="card-title">Basic</h4>
						                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						                        <a  className="btn btn-outline-pink">Go somewhere</a>
						                    </div>
						                </div>
						            </div>
						        </div>
						        <div className="col-xl-4 col-md-6 col-sm-12">
						            <div className="card" style={style}>
						                <div className="card-body">
						                    <div className="card-block">
						                        <h4 className="card-title">List Group</h4>
						                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						                    </div>
						                    <ul className="list-group list-group-flush">
						                        <li className="list-group-item">
						                            <span className="tag tag-default tag-pill bg-primary float-xs-right">4</span> Cras justo odio
						                        </li>
						                        <li className="list-group-item">
						                            <span className="tag tag-default tag-pill bg-info float-xs-right">2</span> Dapibus ac facilisis in
						                        </li>
						                        <li className="list-group-item">
						                            <span className="tag tag-default tag-pill bg-warning float-xs-right">1</span> Morbi leo risus
						                        </li>
						                        <li className="list-group-item">
						                            <span className="tag tag-default tag-pill bg-success float-xs-right">3</span> Porta ac consectetur ac
						                        </li>
						                        <li className="list-group-item">
						                            <span className="tag tag-default tag-pill bg-danger float-xs-right">8</span> Vestibulum at eros
						                        </li>
						                    </ul>
						                    <div className="card-block">
						                        <a  className="card-link">Card link</a>
						                        <a  className="card-link">Another link</a>
						                    </div>
						                </div>
						            </div>
						        </div>
						        <div className="col-xl-4 col-md-12 col-sm-12">
						            <div className="card" style={style}>
						                <div className="card-body">
						                    <div className="card-block">
						                        <h4 className="card-title">Carousel</h4>
						                        <h6 className="card-subtitle text-muted">Support card subtitle</h6>
						                    </div>
						                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
						                        <ol className="carousel-indicators">
						                            <li data-target="#carousel-example-generic" data-slide-to="0" className=""></li>
						                            <li data-target="#carousel-example-generic" data-slide-to="1" className="active"></li>
						                            <li data-target="#carousel-example-generic" data-slide-to="2" className=""></li>
						                        </ol>
						                        <div className="carousel-inner" role="listbox">
						                            <div className="carousel-item">
						                                <img src={CarouselImage} alt="First slide"/>
						                            </div>
						                            <div className="carousel-item active">
						                                <img src={CarouselImage} alt="Second slide"/>
						                            </div>
						                            <div className="carousel-item">
						                                <img src={CarouselImage} alt="Third slide"/>
						                            </div>
						                        </div>
						                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						                            <span className="icon-prev" aria-hidden="true"></span>
						                            <span className="sr-only">Previous</span>
						                        </a>
						                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						                            <span className="icon-next" aria-hidden="true"></span>
						                            <span className="sr-only">Next</span>
						                        </a>
						                    </div>
						                    <div className="card-block">
						                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						                    </div>
						                </div>
						            </div>
						        </div>
						    </div>
					    </div>
				  	</div>
				</div>
			</div>
		);
	}
}

export default Home;