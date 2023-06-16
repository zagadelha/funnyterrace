<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'funnyterrace_v4' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|3Q>{b+ s&5o|Hi-:sZ5q3M#U:w!v#RvUBhyOLQ^Hkd*ImI?uy<5GHDkDT|tW$h3' );
define( 'SECURE_AUTH_KEY',  '*>JLK]|ddE8KK~U?2=xqgSs$jzTheXYDXXt{V,0z-Lp)ZJVge2z<oSnL[ieViXW$' );
define( 'LOGGED_IN_KEY',    'o7GOU*hIe>`V.<a`V+rLQjuh_5g[k`O(Z8a`S=e/xdB]gKFo*7,Ra8egWlKCDnB}' );
define( 'NONCE_KEY',        '8$Zb>7~+C.:,X6Dbtw`>aIO$+:,ycyoq!;H[bwHaQw,T8o%2*~1)6gHi(suRAm|n' );
define( 'AUTH_SALT',        'ODU7U>8dW7Y&KypfYPO(G|*OMb .Dv-L+ZInm26MJHuB<X%%)+{|63FK+8wn{!Q_' );
define( 'SECURE_AUTH_SALT', 'poqiz(v#{+yzM=v.ulX7i{]-DT:Q)+oQ|Ctb/>`;6p.Dt^R%5JR1Y|`ONorhG%r-' );
define( 'LOGGED_IN_SALT',   '?xb%9M0 1PGb|PW0(UI^PMEVI$FRII=_9dZG~}!U`Z/6UzgUAb:Gxs+#vRO&q`{[' );
define( 'NONCE_SALT',       'w>4X1|.Mb>P{Mho Bv3u3@K}$r.osN^I{gC3ujwj.1V(~~V{E?od,x?mJG?G0v)^' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
