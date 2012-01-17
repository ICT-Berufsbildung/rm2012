<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="xml" indent="yes" encoding="ISO-8859-1" omit-xml-declaration="yes" />

<xsl:template match="/">
 <test-en>
  <xsl:apply-templates />
 </test-en>
</xsl:template>

<xsl:template match="ereignis">
 <event>
  <xsl:apply-templates />
 </event>
</xsl:template>

<xsl:template match="beschreibung">
 <description><xsl:value-of select="." /></description>
</xsl:template>

<xsl:template match="zeitstempel">
 <timestamp><xsl:value-of select="." /></timestamp>
</xsl:template>

</xsl:stylesheet>